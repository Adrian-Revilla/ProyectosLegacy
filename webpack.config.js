const path = require('path');
module.exports = env =>{
    console.log('variable',env.var1) // env.var2
    
    const carpeta= env.var1;

    return{
   
        entry: path.resolve(__dirname,`./src/${carpeta}/entry.js`),
        output:{
            path: path.resolve(__dirname,'./prod/'),
            filename: "bundle.js",
            publicPath:'/'        
        },
        mode:'development',
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
                    use: ['style-loader','css-loader'
                    ]
                  
                },
                {
                    test:/\.s[ac]ss$/i,
                    use: ['style-loader',
                        'css-loader',
                        'sass-loader',
                      ],
                },
    
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    include: path.resolve(__dirname, 'src'),
                    use: {
            
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        
                      }
            
                    }
                    
            
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
                    test: /\.(ico)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                    
                 },
                
            ] 
        },
        devServer: {
            contentBase:path.resolve(__dirname,'./prod'),
            historyApiFallback: true,
            port: 8000,
            host: '0.0.0.0',
            publicPath:'/'               
        }

    }
   
}