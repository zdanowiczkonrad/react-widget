module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    "resolve": {
        "alias": {
        "react": "preact-compat",
        "react-dom": "preact-compat"
        }
    }
  };
