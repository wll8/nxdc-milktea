const config = {
  development: {
    baseUrl: `http://127.0.0.1:9050`,
    staticUrl: `http://127.0.0.1:9050/static`,
  },
  production: {
    baseUrl: ``,
    staticUrl: ``,
  },
}[process.env.NODE_ENV]

module.exports = config
