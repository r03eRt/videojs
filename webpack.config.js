/*

Roberto Morgado config.

*/

'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

//production or dev?
const production = process.env.NODE_ENV === undefined ? false : true;

//save the vendor names in an array
const vendorFiles = getVendorNames();

//get css-loader string
const cssLoaderString = getCssLoaderString();

//src and public paths
const srcPath = path.resolve(__dirname, 'app/src');
const publicPath = path.resolve(__dirname, 'app/public/assets');

//get plugins
const pluginsArray = getPluginsArray();

//config export
module.exports = {

    entry:  {
        app: [
            //app entry point
            path.join(srcPath, 'js/main.js')
        ],
        vendor: vendorFiles
    },

    output: {
        path: publicPath,
        filename: path.normalize('js/app.min.js')
    },

    module: {
        loaders: [
            //ES6/babel
            {
                test: /\.js$/,
                include: [

                    //files in app/src/js
                    path.join(srcPath, 'js')

                ],
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true,
                    babelrc: false,
                    plugins: [
                        ['module-resolver', {
                            'alias': {
                                'root_js': path.join(srcPath, 'js')
                            }
                        }]
                    ]
                }
            },
            //scss
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', cssLoaderString +'!sass-loader')
            }
        ]
    },

    plugins: pluginsArray
};

function getVendorNames()
{
    //get vendor names from package.json dependencies object as an array
    return Object.keys((JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'))).dependencies);
}

function getCssLoaderString()
{
    let cssString = 'css-loader';

    //add ?-url to ignore url(../whatever.woff2), url(../foo.jpg), etc because since
    //we use the CopyWebpackPlugin to copy phps, imgs, etc, it is cleaner to copy the
    //images and fonts to the public directory with it too
    //--
    //Using the CopyWebpackPlugin also avoids importing files loaded by pixi/threejs
    //with the javascript application for webpack to handle them. Also makes dealing
    //with single files, files with a common extension and file renames a lot cleaner.

    cssString += '?-url';

    if(production === true)
    {
        /*
            http://cssnano.co/optimisations/

            calc: false,
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            reduceInitial: false,
            reduceTransforms: false,
            zindex: false
        */

        cssString += '&minimize';
        cssString += '&-calc';
        cssString += '&-discardUnused';
        cssString += '&-mergeIdents';
        cssString += '&-reduceIdents';
        cssString += '&-reduceInitial';
        cssString += '&-reduceTransforms';
        cssString += '&-zindex';
    }

    return cssString;
}

function getPluginsArray()
{
    let plArray = [];

    //extracts the vendor files and places them as vendor.min.js
    plArray.push(new webpack.optimize.CommonsChunkPlugin('vendor', path.normalize('js/vendor.min.js')));

    //extracts the css and places it as app.min.css in the css directory
    plArray.push(new ExtractTextPlugin(path.normalize('css/app.min.css'), {allChunks: true}));

    //copies files
    plArray.push(new CopyWebpackPlugin([

        //imgs
        {from: path.join(srcPath, 'img'), to: 'img'},

        //phps (default 'to' value is output directory)
        {from: path.join(srcPath, 'php'), to: '../'},

        //fonts
        {from: path.join(srcPath, 'fonts'), to: 'fonts'},

    ]));

    if(production === true)
    {
        //clean public path directory to remove source maps, etc
        plArray.push(new CleanWebpackPlugin([publicPath], {verbose: true, dry: false}));

        //uglify javascript
        plArray.push(new webpack.optimize.UglifyJsPlugin({compress: true, mangle: true, comments: false}));
    }
    else
    {
        //notifications
        plArray.push(new WebpackNotifierPlugin({title: 'Webpack', alwaysNotify: true}));
    }

    return plArray;
}
