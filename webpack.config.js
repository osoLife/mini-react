const { merge } = require('webpack-merge')
const base = require('./config/base')
const dev = require('./config/dev')
const prod = require('./config/prod')

module.exports = function ({ development }) {
    return merge(base, development ? dev : prod)
}