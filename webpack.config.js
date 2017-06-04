var webpack= require("webpack");

var path = require('path');

module.exports={
    entry: path.resolve('./src/main.js'),
    output:{
        path: path.resolve('./dist'),
        publicPath:"/",
        filename:"[name].js"
    },
    module:{
        loaders:[

            {test: /\.css$/, loader: ['css-loader']},
            {test: /\.vue$/, loader: ['vue-loader']},
            {test: /\.html$/, loader: ['html-loader']},
            {test: /(\.js)$/, loader:["babel-loader"] ,exclude:/node_modules/,
            //  query:{
            //         presets:["es2015"]
            //  }
            }
        ]
    },
    resolve:{
      alias: {
          'vue': 'vue/dist/vue.js',
          'vue-router$': 'vue-router/dist/vue-router.common.js'
      }
    },
    plugins:[
         /*
         new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
               */
    ]
}
