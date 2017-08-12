const path = require('path')
// import ExtractTextPlugin from 'extract-text-webpack-plugin'

const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../www')
}

// const cssLoaders = ['style-loader', 'css-loader?url=false']
//  `css-loader?modules&localIdentName=[local]__[hash:base64:5]&importLoaders=1&sourceMap=${isProd}`
// const cssLoaders = [
//   'style-loader',
//   'css-loader'
//   // 'css-loader?modules&localIdentName=[local]__[hash:base64:5]&importLoaders=1'
// ]

const config = {
  resolve: {
    // extensions: ['', '.js', 'jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
        // loader: cssLoaders.join('!')
        // includes: [PATHS.src, PATHS.node_modules]
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     `css-loader?modules&localIdentName=[local]__[hash:base64:5]&importLoaders=1&sourceMap=${isProd}`,
        //     `postcss-loader`
        //   ]
        // })

        // includes: [PATHS.src, PATHS.node_modules]
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [['transform-react-jsx', { pragma: 'h' }]]
            }
          }
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       // presets: ['react'],
      //       plugins: [['transform-react-jsx', { pragma: 'h' }]]
      //       // presets: ['env']
      //     }
      //   }
      // },
      {
        test: /\.svg$/,
        loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react'
      }
    ]
  }
}

module.exports = config
