const path = require('path');
module.exports ={
    entry: path.resolve(__dirname,"./src/entry.js"),
    output:{
        path: path.resolve(__dirname,'./prod/'),
        filename: "bundle.js",
        publicPath:'/'        
    },
    mode: 'development',
     module: {
        rules:[
            {
                test:/\.html$/ ,
                loader:'file-loader',
                options:{
                    name: '[name].[ext]',
                }
            },
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader']
              
            },
            {
                test:/\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
            },

            {
                test:/\.(js|jsx)$/,
                use: ['babel-loader']
                
            },
            {
                test: /\.(jpg|png|jpeg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath:'images'
                }
                
             },
             {
                 test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
                 loader: 'url-loader',
                 options: {
                     name: '[name].[ext]',
                     outputPath:'fonts'
                 }
             }
        ] 
    },
    
    devServer: {
        contentBase:path.resolve(__dirname,'./prod'),
        historyApiFallback: true,
        port: 9000,
        host: '0.0.0.0',
        publicPath:'/'               
      }
}