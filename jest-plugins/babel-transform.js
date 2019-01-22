const babelJest = require('babel-jest');

const config = require('../babel.config.js');

module.exports = babelJest.createTransformer(config);
