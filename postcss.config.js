module.exports = () => ({
  plugins: {
    'postcss-utilities':{},
    'postcss-mixins':{},
    'postcss-simple-vars':{},
    'postcss-custom-media': {
      "extensions": {
        '--phone': '(min-width: 320px) and (max-width: 767px)',
        '--tablet': '(min-width: 768px) and (max-width: 991px)',
        '--desktop': '(min-width: 992px) and (max-width: 1199px)',
        '--large-desktop': '(min-width: 1200px)'
      }
    },
    'postcss-nested-props':{},
    'postcss-nested': {}
  }
})