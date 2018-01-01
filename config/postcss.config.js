module.exports = ({ file, options, env }) => ({
  plugins: {
    autoprefixer: env === 'production' && {
      browsers: ['last 2 versions', 'ie >= 10', 'safari >= 9']
    } ,
    cssnano: env === 'production' && {
      browsers: ['last 2 versions', 'ie >= 10', 'safari >= 9']
    }
  }
})