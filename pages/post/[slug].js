import React from "react";
import ReactMarkdown from "react-markdown/with-html";

function Post({ post }) {
  if (!post) return <div>not found</div>;

  const {
    attributes: { title, thumbnail, content },
  } = post;

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

Post.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const post = await import(`../../content/posts/${slug}.md`);
  return { post, attributes: post.attributes };
};

export default Post;
