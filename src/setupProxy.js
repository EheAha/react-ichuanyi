const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/m.php', { 
      target: 'https://ichuanyi.com',
      changeOrigin: true
    }),
    proxy('/media', { 
      target: 'https://ydcdn4.ichuanyi.cn',
      changeOrigin: true
    }),
    proxy('/index', { 
      target: 'https://ichuanyi.com',
      changeOrigin: true
    })
  );
};