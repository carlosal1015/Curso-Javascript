const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'yo-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://data1:123456@ds147167.mlab.com:47167/dbcrud'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yo-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/yo-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yo-express'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/yo-express-production'
  }
};

module.exports = config[env];
