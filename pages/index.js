import Head from "next/head";
import ReactMarkdown from "react-markdown/with-html";
import Link from "next/link";
import Header from "../components/Header";
import clsx from "clsx";

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

Home.getInitialProps = async () => {
  const postsList = await importPosts();
  const homepage = await import("../content/home.md");
  return {
    props: {
      postsList,
      attributes: homepage.attributes,
      body: homepage.body,
    },
  };
};

function Home({ props }) {
  const {
    postsList,
    attributes: { title, cats },
    body,
  } = props;

  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{title}</title>
      </Head>
      <div className="w-100 sans-serif bg-white">
        <Header isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />

        <div
          className={clsx(
            "pageContainer pa3 pa5-ns bt b--black-10 black-70 bg-white",
            isMenuOpened ? "menuOpened" : null
          )}
        >
          <section className="mw7 center">
            <h1>{title}</h1>
            <ReactMarkdown
              escapeHtml={false}
              source={body}
              //renderers={{ code: CodeBlock, image: MarkdownImage }}
            />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))}
            </ul>
            <div className="blog-list">
              {postsList.map((post, k) => {
                return (
                  <Link key={k} href={`/post/${post.slug}`}>
                    <a>
                      <img src={post.attributes.thumbnail} />
                      <h2>{post.attributes.title}</h2>
                    </a>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .blog-list a {
          display: block;
          text-align: center;
        }
        .blog-list img {
          max-width: 100%;
          max-height: 300px;
        }
        .pageContainer {
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .pageContainer.menuOpened {
          height: 100%;
          overflow: hidden;
          transform: translateY(300px);
        }
      `}</style>
    </>
  );
}

export default Home;
