'use-strict';
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = {
	development: {
		//db: 'mongodb://localhost/yo-express-development',
		db: 'mongodb://localhost/api-rest-express'
	},
	test: {
		db: 'mongodb://localhost/api-rest-express-test'
	},
	production: {
		db: 'mongodb://localhost/api-rest-express-production'//colocar url
	}
};

module.exports = config[env];
