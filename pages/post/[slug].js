import React, { Component } from "react";
import dynamic from "next/dynamic";

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const post = await import(`../../content/posts/${slug}.md`).catch(
      (error) => null
    );
    return { post };
  }
  render() {
    if (!this.props.post) return <div>not found</div>;

    const {
      attributes: { title, thumbnail, content },
    } = this.props.post.default;

    return (
      <>
        <article>
          <h1>{title}</h1>
          <img src={thumbnail} />
          {content}
        </article>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </>
    );
  }
}

export default Post;
