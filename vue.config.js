module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/CVR-Teams-Archiver-App/'
  : '/'
}
