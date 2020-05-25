import Head from "next/head";
import ReactMarkdown from "react-markdown/with-html";
import Link from "next/link";
import Header from "../components/Header";
import clsx from "clsx";

About.getInitialProps = async () => {
  const page = await import("../content/about.md");
  return {
    attributes: page.attributes,
    body: page.body,
  };
};

function About(props) {
  const {
    attributes: { title },
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
      <div id={`about`} className="w-100 sans-serif bg-white">
        <Header isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />

        <div
          className={clsx(
            "pageContainer pa3 pa5-ns bt b--black-10 black-70 bg-white",
            isMenuOpened ? "menuOpened" : null
          )}
        >
          <div className="mt6 mb6 center ph3 ph0-l flex-l">
            <div className="w-40-l dib">
              <h1 className="mb3">{title}</h1>
            </div>
            <div className="w-60-l dib cms-content">
              <ReactMarkdown
                escapeHtml={false}
                source={body}
                //renderers={{ code: CodeBlock, image: MarkdownImage }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default About;
