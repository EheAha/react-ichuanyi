const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path')

const resolve = (url)=>{
    return path.resolve(__dirname,'./',url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config.resolve.alias={
        "@":resolve('src'),
        'styles':resolve('src/assets/styles'),
        'pages':resolve('src/pages'),
        'common':resolve('src/components/common'),
        'styled':resolve('src/components/styled'),
        'images':resolve('src/assets/images'),
        'high':resolve('src/components/HighOrder'),
        'more':resolve('src/pages/more'),
        'singlePage':resolve('src/pages/singlePage')
    }
    return config;
  };