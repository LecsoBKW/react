const express = require('express');
const app = express();

//react hot reload
if (process.env.NODE_ENV != 'production') {
    const config = require('./webpack.config.dev.js');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}

//static
app.use(express.static('public'));

//listen
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on :' + (process.env.PORT || 3000));
});
