import React, { Component } from "react";
import ReactMarkdown from "react-markdown/with-html";

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const post = await import(`../../content/posts/${slug}.md`);
    console.log("post:", post);
    return { post, attributes: post.attributes };
  }
  render() {
    if (!this.props.post) return <div>not found</div>;

    const {
      attributes: { title, thumbnail, content },
    } = this.props.post;

    return (
      <>
        <article>
          <h1>{title}</h1>
          <img src={thumbnail} />
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            //renderers={{ code: CodeBlock, image: MarkdownImage }}
          />
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
