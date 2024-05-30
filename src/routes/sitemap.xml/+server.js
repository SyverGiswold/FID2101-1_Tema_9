export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://syver-g.netlify.app/</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.50</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/en</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.50</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/projects/tema_8</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/en/projects/tema_8</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/projects/tema_5</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/en/projects/tema_5</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/en/projects/tema_16</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
      <url>
        <loc>https://syver-g.netlify.app/projects/tema_16</loc>
        <lastmod>2024-05-30T13:50:26+02:00</lastmod>
        <priority>0.20</priority>
      </url>
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}