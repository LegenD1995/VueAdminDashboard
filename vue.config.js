/* eslint-disable */
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/cms" : "/cms",
  indexPath: "index.html", // set this dir for your index.php in Laravel or CodeIgniter
  devServer: {
    proxy: 'http://localhost',
  }
};


// must be in below
require('es6-promise').polyfill();
