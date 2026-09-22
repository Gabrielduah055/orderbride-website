// Non-browser checks. Run after npm run build; no network or form submissions.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

(async () => {
  const { parse } = await import('parse5');
  const source = fs.readFileSync('src/app/core/constants/faq-content.constants.ts', 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const context = { exports: {} };
  vm.runInNewContext(compiled.outputText, context);
  const { FAQ_GROUPS, filterFaqGroups } = context.exports;
  const entries = FAQ_GROUPS.flatMap(group => group.items);
  assert.equal(FAQ_GROUPS.length, 6);
  assert.equal(new Set(entries.map(item => item.id)).size, entries.length);
  assert.equal(filterFaqGroups('  ').flatMap(group => group.items).length, entries.length);
  assert.equal(filterFaqGroups('', 'pilot').length, 1);
  assert.equal(filterFaqGroups('', 'pilot')[0].items.length, 3);
  assert.ok(filterFaqGroups('  PDF   RECEIPT ').some(group => group.items.some(item => item.id === 'receipts')));
  assert.equal(filterFaqGroups('PDF receipt', 'pilot').length, 0);
  assert.equal(filterFaqGroups('no-such-question-xyz').length, 0);
  assert.equal(filterFaqGroups('', 'unknown-topic').length, 0);
  console.log(`PASS FAQ: ${entries.length} unique answers, topic filters, search, whitespace, case and no-result states`);

  const output = path.resolve('dist/orderbridge-website/browser');
  const walk = node => [node, ...(node.childNodes || []).flatMap(walk)];
  const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
  const content = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(content).join('');
  for (const route of ['faq', 'about', 'privacy', 'terms', 'book-demo', '404']) {
    const html = fs.readFileSync(path.join(output, route, 'index.html'), 'utf8');
    const nodes = walk(parse(html));
    const ids = nodes.map(node => attr(node, 'id')).filter(Boolean);
    assert.equal(new Set(ids).size, ids.length, `${route}: unique HTML IDs`);
    assert.equal(nodes.filter(node => node.tagName === 'h1').length, 1, `${route}: one main heading`);
    assert.ok(nodes.some(node => node.tagName === 'title' && content(node).includes('OrderBridge')));
    for (const node of nodes) {
      if (node.tagName === 'img') {
        assert.notEqual(attr(node, 'alt'), undefined, `${route}: image alt text`);
        const src = attr(node, 'src');
        if (src.startsWith('/')) assert.ok(fs.existsSync(path.join('public', src)), `${route}: image exists`);
      }
      const controls = attr(node, 'aria-controls');
      if (controls && controls !== 'mobile-menu') assert.ok(ids.includes(controls), `${route}: ARIA target ${controls}`);
      if (node.tagName === 'a') {
        const href = attr(node, 'href');
        assert.ok(href && href !== '#', `${route}: usable link`);
        if (href.startsWith('/')) {
          const url = new URL(href, 'https://example.test');
          assert.ok(fs.existsSync(path.join(output, url.pathname, 'index.html')), `${route}: internal route ${href}`);
          if (url.hash && url.pathname === '/' + route) assert.ok(ids.includes(url.hash.slice(1)), `${route}: section link ${href}`);
        }
      }
    }
    if (route === 'faq') {
      const buttons = nodes.filter(node => node.tagName === 'button' && attr(node, 'id')?.startsWith('question-'));
      assert.equal(buttons.length, entries.length);
      for (const button of buttons) assert.equal(attr(button, 'aria-expanded'), 'false');
      const data = nodes.find(node => node.tagName === 'script' && attr(node, 'data-orderbridge-schema') !== undefined);
      const schema = JSON.parse(content(data));
      const faqSchema = schema.find(item => item['@type'] === 'FAQPage');
      assert.equal(faqSchema.mainEntity.length, entries.length);
      for (const item of entries) assert.ok(faqSchema.mainEntity.some(q => q.name === item.question && q.acceptedAnswer.text === item.answer));
    }
    if (route === 'book-demo') {
      assert.equal(nodes.filter(node => node.tagName === 'iframe').length, 0, 'calendar requires user action');
      assert.ok(nodes.some(node => node.tagName === 'a' && attr(node, 'href')?.startsWith('https://cal.com/')));
      assert.ok(html.includes('Load booking calendar'));
    }
    if (route === 'privacy' || route === 'terms') assert.ok(html.includes('mailto:gabrielagyemanduah@gmail.com'));
    if (route === '404') assert.ok(nodes.some(node => node.tagName === 'meta' && attr(node, 'name') === 'robots' && attr(node, 'content').includes('noindex')));
    console.log(`PASS ${route}: prerendered HTML, headings, links, assets and ARIA references`);
  }
  assert.equal(fs.readFileSync(path.join(output, '404.html'), 'utf8'), fs.readFileSync(path.join(output, '404/index.html'), 'utf8'));
  console.log('PASS static 404 output. No browser opened; no external requests made.');
})().catch(error => { console.error(error); process.exitCode = 1; });
