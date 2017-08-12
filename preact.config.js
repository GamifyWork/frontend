export default function(config, env, helpers) {
  /** you can change config here **/

  let manifest = config.plugins.find(
    plugin => plugin.constructor.name === 'HtmlWebpackPlugin'
  ).options.manifest

  manifest.name = 'Gamify Work'
  manifest.short_name = 'GamifyWork'
  manifest.theme_color = '#2F3E9E'
}
