// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
    ignore: [
      /^node_modules/,
    ]
  },
  postcss: {
    processors: [
      require('autoprefixer')(['last 8 versions']),
    ]
  }
};
