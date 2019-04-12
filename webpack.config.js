module.exports = {
  entry: './sample.js',
  // entry: './index.js',
  output: {
    path: './dist',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
};
