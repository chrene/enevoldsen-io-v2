export default function handler(req: any, res: any) {
  res.send(`
  User-agent: *

    Disallow: /*?ref=https://githubhelp.com
    Disallow: /*?ref=https://giter.club
    
    Sitemap: https://enevoldsen.io/sitemap.xml
  `);
}
