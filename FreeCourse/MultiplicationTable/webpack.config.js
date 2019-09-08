const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: "multiplicationTable-setting",
    mode: 'development', // 실서비스: production
    devtool: 'eval', //실서비스: hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./client'], // client.jsx 에서 './Shiritori.jsx'를 부르기 때문에 명시 하지 않아도 됨.
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],
                        },
                        debug: true,
                    }], 
                '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
}