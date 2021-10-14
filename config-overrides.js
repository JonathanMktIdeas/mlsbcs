const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@translations': 'src/translations',
    '@modules': 'src/modules',
    '@containers': 'src/containers',
    '@components': 'src/components',
    '@utils': 'src/utils',
  })(config)

  return config
}
