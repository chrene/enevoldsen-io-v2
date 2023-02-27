export default function handler(req: any, res: any) {
  res.send(`
    # Allow all crawlers
    User-agent: *
    Allow: /

    Sitemap: https://enevoldsen.io/sitemap.xml
  `);
}
