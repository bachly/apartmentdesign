import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

import Link from "next/link";

const importPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../content/posts", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class Home extends Component {
  static async getInitialProps() {
    const postsList = await importPosts();

    return { postsList };
  }

  render() {
    let { title, cats } = attributes;
    const { postsList } = this.props;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>{title}</title>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
          <div className="blog-list">
            {postsList.map((post) => {
              return (
                <Link href={`blog/post/${post.slug}`}>
                  <a>
                    <img src={post.attributes.thumbnail} />
                    <h2>{post.attributes.title}</h2>
                  </a>
                </Link>
              );
            })}
            <style jsx>{`
              .blog-list a {
                display: block;
                text-align: center;
              }
              .blog-list img {
                max-width: 100%;
                max-height: 300px;
              }
            `}</style>
          </div>
        </article>
      </>
    );
  }
}
