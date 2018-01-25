const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'website-version2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/website-version2-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'website-version2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/website-version2-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'website-version2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/website-version2-production'
  }
};

module.exports = config[env];
