module.exports = {
  entry: '../..',
  output: {
    filename: 'test.bundle.js',
    library: 'AwesomeFetch',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
