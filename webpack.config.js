const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const config = { 
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-0"],
                    plugins: ["transform-decorators-legacy", "transform-class-properties"] 
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                        {
                            loader: "style-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            } 
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }                    
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                     loader: 'file-loader?name=./src/styles/fonts/gotham/[name].[ext]',
                     options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/gotham'
                     }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                   {
                     loader: 'file-loader?name=./src/images/[name].[ext]',
                     options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                  }
                ]
            } 
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {
                from: './src/styles/fonts',
                to: './fonts'
            },
            {
                from: './src/images',
                to: './images'
            }
        ]),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};
module.exports = config;