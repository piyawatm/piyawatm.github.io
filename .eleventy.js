module.exports = function(eleventyConfig) {
  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Ignore files that shouldn't be processed
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules");

  // Filter: format date as "Month Year"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
