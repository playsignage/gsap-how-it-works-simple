export default function (config, env, helpers) {
  // Fixes gsap's AMDishness https://github.com/MozaikAgency/wp-theme-starter/issues/251#issuecomment-221542955
  const uglifyPluginList = helpers.getPluginsByName(config, 'UglifyJsPlugin')

  if (uglifyPluginList.length) {
    // There's max 1 instance of the uglify plugin, but getPluginsByName returns a list.
    const uglifyPluginIndex = uglifyPluginList[0].index;

    config.plugins[uglifyPluginIndex].options.compress.pure_getters = false
    return config;
  }
}
