import { NextResponse } from "next/server";

export function GET() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" role="img" aria-label="Zdjęcie produktu">
  <rect width="600" height="400" fill="#1C1C23"/>
  <text x="300" y="208" text-anchor="middle" fill="#94A3B8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26">Zdjęcie produktu</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
