var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
let babelPlugins = ['__coverage__']
module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app: "./app/main.js",
        vendor: "./app/vendor.js"
    },
    output: {
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules)/,
            query: {
                presets: ['es2015', 'angular2'],
                plugins: babelPlugins
            }
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.optimize.DedupePlugin()
        // new webpack.optimize.UglifyJsPlugin({
        //     mangle: {
        //         keep_fnames: true
        //     }
        // })
    ]
};
