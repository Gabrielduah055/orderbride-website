import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist/orderbridge-website/browser');

await copyFile(
  resolve(outputDirectory, '404/index.html'),
  resolve(outputDirectory, '404.html')
);

console.log('Prepared custom static 404 output.');
