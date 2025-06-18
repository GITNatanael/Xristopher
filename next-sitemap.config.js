/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://xristopher.vercel.app/', // cambia esto por tu dominio real
  generateRobotsTxt: true,        // también genera robots.txt
  generateIndexSitemap: false,    // si quieres un solo sitemap (no dividido en varios)
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
};
