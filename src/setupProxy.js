const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/m.php', { 
    target: 'https://ichuanyi.com',
    changeOrigin: true
  }));
};