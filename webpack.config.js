const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    
    //ansi escape colors
    const RED = '\u001b[31m%s\x1b[0m';

    let string = "▲▲▲▲▲▲PROJECT TARGET ::" + env.var1 + ":: PROJECT TARGET▲▲▲▲▲▲";

    console.log(RED, string);
    console.log(RED, '////////////////////////////////////////////////////////');

    const FOLDER = env.var1;
    const ENTRY = path.resolve(  __dirname, `./src/${FOLDER}/index.ts`);
    const OUTPUT = path.resolve( __dirname, `./test/${FOLDER}/`);
    const JSFILENAME = "bundle.js";
    const MODE = "development";
    
    //LOADERS
    const WEBPACKMODULERULES = [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.handlebars$/, loader: "handlebars-loader" },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(jpg|png|jpeg)$/i, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images' } },
        { test: /\.(ico)$/i, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images'  }

},
    ];

    //webpack-dev-server
    const PORT = 4040;
    const DEV_SERVER_PATH = path.resolve(__dirname, OUTPUT);

    //plugins
    const HTMLWEBPACKPLUGINOPTS = {
        filename: 'index.html',
        template: `src/${FOLDER}/index.handlebars`,
        inject: false
    };

    return {
        
        entry: { main: ENTRY },        
        output: { path: OUTPUT , filename: JSFILENAME },
        mode: MODE,
        devtool:'source-map',
        module: { rules: WEBPACKMODULERULES },

        resolve: { extensions: ['.tsx', '.ts', '.js'] },

        plugins: [
            new HtmlWebpackPlugin(HTMLWEBPACKPLUGINOPTS)
        ],
        
        devServer: { contentBase: DEV_SERVER_PATH, port: PORT, open: true, stats: 'minimal', host: '0.0.0.0' },
        externals : {
            "react": "React",
            "react-dom": "ReactDOM"
        } 
        
       
    }

}

/* {
    test: /\.(ico)$/i,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
    }

}, */
/* {
          test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
          loader: 'url-loader',
          options: {
                name: '[name].[ext]',
                outputPath:'fonts'
              }
            } 
        //EL KEY ES EL NOMBRE DEL IMPORT Y EL VALUE ES COMO SE USA LA VARIABLE EXPORTADA
            
             externals : {
            react: 'React',
            'react-dom': 'ReactDOM'
        } 
            
            
            
            {
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties',{loose:true}]
              }
            }
          }
            
            
            
            */