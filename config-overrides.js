const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
  })(config)

  return config
}
