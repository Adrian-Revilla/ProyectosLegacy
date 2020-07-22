const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    console.log('variable', env.var1); // env.var2

    const carpeta = env.var1;

    return {

        entry: {
            main:path.resolve(__dirname, `./src/${carpeta}/index.ts`)

        },
        output: {
            path: path.resolve(__dirname, './prod/'),
            filename: "bundle.js",
        },
        mode: 'development',
        module: {
            rules: [
               /*  {
                    test: /\.html$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }, */
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']

                },
              /*   {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                }, */

                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                /* {
                    test: /\.(jpg|png|jpeg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }

                }, */

                

                /* {
                    test: /\.(ico)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }

                }, */

            ]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
        devServer: {
            contentBase: path.resolve(__dirname, './prod'),
            port: 4040,
        }

    }

}