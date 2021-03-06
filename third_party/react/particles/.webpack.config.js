var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

const PROD = process.env.NODE_ENV === "production";

var plugins = PROD ? [
    new ExtractTextPlugin("app.css"),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
] : [
    new ExtractTextPlugin("app.css"),
];

module.exports = {
    entry: [
        "./client/index.jsx",
    ],
    output: {
        path: path.resolve(path.join(__dirname, "public")),
        publicPath: "/",
        filename: "app.js",
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: "stylelint-loader"
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
            {
                // For font and icon requires.
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url?limit=100000",
            }
        ],
    },
    plugins: plugins,
    stylelint: {
        configFile: path.join(__dirname, "./.stylelintrc"),
    },
};
