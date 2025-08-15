module.exports = {
  content: [
    './**/*.html',
    './**/*.php',
    './src/**/*.js',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};
