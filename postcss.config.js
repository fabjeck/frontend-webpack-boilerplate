export default ({ env }) => ({
  plugins: {
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
});
