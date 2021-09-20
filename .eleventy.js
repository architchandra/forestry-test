module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');

  return {
    markdownTemplateEngine: "njk"
  }
}