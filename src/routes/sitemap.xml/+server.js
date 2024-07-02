export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		>
      <url>
        <loc>https://syver.vercel.app/</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.50</priority>
        <xhtml:link rel="alternate" hreflang="en" href="https://syver.vercel.app/en" />
      </url>
      <url>
        <loc>https://syver.vercel.app/en/</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.50</priority>
        <xhtml:link rel="alternate" hreflang="no" href="https://syver.vercel.app" />
      </url>
      <url>
        <loc>https://syver.vercel.app/projects/tema_8</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="en" href="https://syver.vercel.app/en/projects/tema_8" />
      </url>
      <url>
        <loc>https://syver.vercel.app/en/projects/tema_8</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="no" href="https://syver.vercel.app/projects/tema_8" />
      </url>
      <url>
        <loc>https://syver.vercel.app/projects/tema_5</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="en" href="https://syver.vercel.app/en/projects/tema_5" />
      </url>
      <url>
        <loc>https://syver.vercel.app/en/projects/tema_5</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="no" href="https://syver.vercel.app/projects/tema_5" />
      </url>
      <url>
        <loc>https://syver.vercel.app/en/projects/tema_16</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="no" href="https://syver.vercel.app/projects/tema_16" />
      </url>
      <url>
        <loc>https://syver.vercel.app/projects/tema_16</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.10</priority>
        <xhtml:link rel="alternate" hreflang="en" href="https://syver.vercel.app/en/projects/tema_16" />
      </url>
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}