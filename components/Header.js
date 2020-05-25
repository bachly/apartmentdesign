export default function Header({ isMenuOpened, toggleMenu }) {
  const clickMenuButton = (event) => {
    event.preventDefault();
    toggleMenu();
  };

  return (
    <>
      <header
        className={isMenuOpened ? "menuContainer menuOpened" : "menuContainer"}
      >
        <div className="f3 db offscreen-nav w-100 tc center bg-gray white flex jusitfy-center items-center flex-row">
          <nav className="center">
            <a
              className="db b pv3"
              href="https://interfacelovers.com/interviews"
            >
              Interviews
            </a>
            <a className="db b pv3" href="https://interfacelovers.com/mixes">
              Mixes
            </a>
            <a className="db b pv3" href="https://interfacelovers.com/about">
              About
            </a>
            <a
              className="db b pv3"
              href="https://www.instagram.com/theloversmag/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="db b pv3"
              href="https://twitter.com/theloversmag"
              target="_blank"
            >
              Twitter
            </a>
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
            <a className="ml4 b" href="https://interfacelovers.com/interviews">
              Interviews
            </a>
            <a className="ml4 b" href="https://interfacelovers.com/mixes">
              Mixes
            </a>
            <a className="ml4 b" href="https://interfacelovers.com/about">
              About
            </a>
            <a
              className="ml4 b"
              href="https://www.instagram.com/theloversmag/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="ml4 b"
              href="https://twitter.com/theloversmag"
              target="_blank"
            >
              Twitter
            </a>
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

        .menu {
          height: 64px;
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
