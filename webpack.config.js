const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    //ansi escape colors
    const RED = '\u001b[31m%s\x1b[0m';

    let string = "▲▲▲▲▲▲PROJECT TARGET ::" + env.var1 + ":: PROJECT TARGET▲▲▲▲▲▲";

    console.log(RED, string);
    console.log(RED, '////////////////////////////////////////////////////////');

    const FOLDER = env.var1;
    const ENTRY = path.resolve(__dirname, `./src/${FOLDER}/index.ts`);
    const OUTPUT = path.resolve(__dirname, `./test/${FOLDER}/`);
    const JSFILENAME = "bundle.js";
    const MODE = "development";

    //LOADERS
    const WEBPACKMODULERULES = [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.handlebars$/, loader: "handlebars-loader" },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(jpg|png|jpeg)$/i, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images' } }
    ];

    //webpack-dev-server
    const dev_server_conf = {
        contentBase: path.resolve(__dirname, OUTPUT),
        port: 4040,
        open: true,
        host: '0.0.0.0'
    }

    //plugins
    const HTMLWEBPACKPLUGINOPTS = {
        filename: 'index.html',
        template: `src/${FOLDER}/index.handlebars`,
        inject: true
    };

    const resolve = { extensions: ['.tsx', '.ts', '.js'] }
    

    return {

        entry: { main: ENTRY },
        output: { path: OUTPUT, filename: JSFILENAME },
        mode: MODE,
        devtool: 'source-map',
        module: { rules: WEBPACKMODULERULES },
        resolve: { ...resolve },
        
        plugins: [  new HtmlWebpackPlugin(HTMLWEBPACKPLUGINOPTS)],

        devServer: {...dev_server_conf},

        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }

}