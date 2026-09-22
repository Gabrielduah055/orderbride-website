param([Parameter(Mandatory = $true)][string]$SourcePath)

# Deterministic export of the supplied logo; no redraw or colour changes.
Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Image]::FromFile((Resolve-Path -LiteralPath $SourcePath).Path)
try {
    if ($source.Width -ne 1254 -or $source.Height -ne 1254) {
        throw 'Expected the supplied 1254 x 1254 logo artwork.'
    }
    # Frame the OB symbol only, leaving the wordmark out at favicon sizes.
    $symbolBounds = [System.Drawing.Rectangle]::new(300, 355, 632, 356)
    $assetDirectory = Join-Path $PSScriptRoot '../public/assets/brand'
    foreach ($size in @(32, 64, 180)) {
        $bitmap = [System.Drawing.Bitmap]::new($size, $size)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        try {
            $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#f7faf8'))
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $width = [single]($size * 0.94)
            $height = [single]($width * $symbolBounds.Height / $symbolBounds.Width)
            $destination = [System.Drawing.RectangleF]::new(($size - $width) / 2, ($size - $height) / 2, $width, $height)
            $graphics.DrawImage($source, $destination, $symbolBounds, [System.Drawing.GraphicsUnit]::Pixel)
            $bitmap.Save((Join-Path $assetDirectory "favicon-light-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
        } finally {
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    }
} finally {
    $source.Dispose()
}
