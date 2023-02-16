const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/dualapi',
        createProxyMiddleware({
            target: 'http://16.12.181.15:8090',
            changeOrigin: true,
            pathRewrite: {
                '^/dualapi': ''
            }
        })
    )
}
