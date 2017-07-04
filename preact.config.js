export default function (config, env, helpers) {
  const uglifyPluginIndex = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0].index;

  // Fixes gsap's AMDishness https://github.com/MozaikAgency/wp-theme-starter/issues/251#issuecomment-221542955
  config.plugins[uglifyPluginIndex].options.compress.pure_getters = false
  return config;
}
