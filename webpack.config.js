var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    entry: [
        './client/main.tsx',
        '../node_modules/bootstrap/dist/css/bootstrap.css',
        '../node_modules/font-awesome/css/font-awesome.css'
    ],
    output: {
        path: path.join(basePath, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8088,
        stats: 'errors-only'
    },

    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader', // Run post css actions
                            options: {
                                plugins: function() { // post css plugins, can be exported to postcss.config.js
                                    return [
                                        require('precss'),
                                        require('autoprefixer'),
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                    },
                }),
            },
            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
            // Using here url-loader and file-loader
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.(png|ico|gif|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=./assets/img/[name].[ext]',
            },
        ]
    },
    plugins: [
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: './client/index.html', // Name of template in ./src
            hash: true
        }),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css',
            disable: false,
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
    ]
}