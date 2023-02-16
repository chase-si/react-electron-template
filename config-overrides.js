// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                // 绿色系
                // 'primary-color': '#009999',
                // 'link-color': '#009999'
                // 蓝色系
                'primary-color': '#1AA9E9',
                'link-color': '#1AA9E9'
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    })
)
