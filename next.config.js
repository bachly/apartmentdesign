const glob = require("glob");

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["body"] },
    });
    return cfg;
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
    };

    // get all .md files in the posts dir
    const blogs = glob.sync("content/posts/**/*.md");

    // remove path and extension to leave filename only
    const blogSlugs = blogs.map((file) => {
      return file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim();
    });

    // add each post to the paths obj
    blogSlugs.forEach((slug) => {
      paths[`/post/${slug}`] = { page: "/post/[slug]", query: { slug } };
    });

    console.log("> Exporting following paths:", paths);

    return paths;
  },
};
