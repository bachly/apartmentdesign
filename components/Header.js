export default function Header({ isMenuOpened, toggleMenu }) {
  const clickMenuButton = (event) => {
    event.preventDefault();
    toggleMenu();
  };

  const navLinks = [
    {
      linkText: "Posts",
      linkUrl: "/posts",
    },
    {
      linkText: "Mixes",
      linkUrl: "/mixes",
    },
    {
      linkText: "About",
      linkUrl: "/about",
    },
    {
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/theloversmag/",
      external: true,
    },
    {
      linkText: "Twitter",
      linkUrl: "https://twitter.com/theloversmag",
      external: true,
    },
  ];

  return (
    <>
      <header
        className={isMenuOpened ? "menuContainer menuOpened" : "menuContainer"}
      >
        <div className="f3 db offscreen-nav w-100 tc center bg-gray white flex jusitfy-center items-center flex-row">
          <nav className="center">
            {navLinks.map(({ linkText, linkUrl, external }, key) => (
              <a
                key={key}
                className="db b pv3"
                href={linkUrl}
                target={external ? "_blank" : ""}
              >
                {linkText}
              </a>
            ))}
          </nav>
        </div>

        <div className="menu w-100 w-90-l ph3 ph0-l center flex items-center justify-between contain">
          <a href="/">SydneyHere</a>

          <button
            type="button"
            className="db dn-l bn menuButton bg-transparent"
            onClick={clickMenuButton}
          >
            <svg
              width="25px"
              height="18px"
              viewBox="0 3 25 18"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="menuIcon"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                transform="translate(0.000000, 3.000000)"
              >
                <rect
                  className="hamburger"
                  id="bottom"
                  fill="
          #1D1D1D        "
                  x="0"
                  y="16"
                  width="24"
                  height="2"
                ></rect>
                <rect
                  className="hamburger"
                  id="mid"
                  fill="
          #1D1D1D        "
                  x="0"
                  y="8"
                  width="24"
                  height="2"
                ></rect>
                <rect
                  className="hamburger"
                  id="top"
                  fill="
          #1D1D1D        "
                  x="0"
                  y="0"
                  width="24"
                  height="2"
                ></rect>
              </g>
            </svg>
          </button>

          <nav className="big-nav dn db-l">
            {navLinks.map(({ linkText, linkUrl, external }, key) => (
              <a
                key={key}
                className="ml4 b"
                href={linkUrl}
                target={external ? "_blank" : ""}
              >
                {linkText}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <style jsx>{`
        .menuContainer {
          background-color: transparent;
          color: #fff;
          position: fixed;
          top: 0;
          width: 100%;
          left: 0;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          will-change: box-shadow, background-color;
          transform: translateY(-300px);
        }

        .menu {
          height: 66px;
        }

        @media screen and (min-width: 60em) {
          .menuContainer {
            background-color: white;
            color: black;
          }
          .menu {
            height: 88px;
          }
        }

        .menuContainer.menuOpened {
          transform: translateY(0);
        }

        .offscreen-nav nav a {
          opacity: 0.8;
        }

        .offscreen-nav {
          background: #1d1d1d;
          height: 300px;
          font-family: AG, -apple-system, BlinkMacSystemFont, helvetica neue,
            helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        }

        .menuButton #bottom,
        .menuButton #mid,
        .menuButton #top {
          transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .menuButton #bottom,
        .menuButton #top {
          transform: rotate(0) translateX(0) translateY(0);
        }

        .menuOpened .menuButton #bottom {
          transform: rotate(-45deg) translateX(-11px) translateY(-3px);
        }

        .menuOpened .menuButton #mid {
          opacity: 0;
          transform: scale(0.9);
        }

        .menuOpened .menuButton #top {
          transform: rotate(45deg) translateX(2px) translateY(-2px);
        }
      `}</style>
    </>
  );
}
