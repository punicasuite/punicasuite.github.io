// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

const Header = (
  {
    title,
    image,
    headerClass
  } /*: {
    title?: React.Node,
    image?: string,
    light?: boolean
  } */
) => {
  function handleHover() {
    document.getElementById('Header-dropdown').style.display = 'block';
  }
  function handleLeave() {
    document.getElementById('Header-dropdown').style.display = 'none';
  }
  return (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .Header {
          position: fixed;
          color: #F8F8FD;
          font-size: 2.8rem;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }

        .Header-nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0 auto;
          padding-left: 3rem;
          line-height: 3rem;
          background: #160033;
          border-top: 4px solid  rgba(0,0,0,0);
          height:6rem;
        }

        .Header-navPart1,
        .Header-navPart2 {
          display: flex;
          flex-direction: row;
        }

        .Header-link {
          display: flex;
          align-items: center;
          margin-right:3rem;
          color: inherit;
          text-decoration: none !important;
          transition: 0.25s all;
          border-bottom: 4px solid transparent;
        }

        .Header-link:hover,
        .Header-link:focus {
          color: inherit;
          border-bottom-color: #00D1EA;
        }

        .Header-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          height:9rem;
          background: rgba(13,24,26,1);;
        }

        .Header-hero-background {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-size: cover;
          background-position: 50% 50%;
          filter: blur(10px);
        }

        .Header-hero-title {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: 0;
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 52px;
          font-weight: 300;
          color: #fff;
          text-shadow: 0 3px 4px rgba(0,0,0,0.6);
          text-align: center;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
        }

        .Header-light {
          position: relative;
          text-align: center;
          width: 39rem;
          margin-top: 6rem;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          font-size:3rem;
        }

        .Header-light-title {
          font-size: 48px;
          font-weight: 800;
          margin: 40px 0;
        }

        .Home-header {
          background: rgba(0,0,0,0) !important;
        }

        .Header-active {
          color: #00D1EA !important;
        }

        .Header-doc-menu {
          position:relative;
        }

        .Header-dropdown {
          background: #160033;
          position: absolute;
          top: 5rem;
          left: 0;
          list-style: none;
          padding: 0;
          z-index:1000;
          width:200px;
          display:none;
          padding:1rem 1rem;
          margin-left:-1rem;
          border-radius: 10px;
        }
        .Header-doc-link {
          color: #ffffff;
        }
        .Header-doc-link:hover {
          color: #00D1EA;
          text-decoration:none;
        }
        .Header-dropdown-icon {
          font-size:16px;
          margin-left:10px;
        }
      `
      }}
    />
    <header className="Header">
      <nav className={"Header-nav " + headerClass}>
        <div className="Header-navPart1">
          <Link className="Header-link" activeClassName="Header-active" to="/">
            Home
          </Link>
            <div className="Header-link Header-doc-menu"
            onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <span>Docs</span>
              <span className="Header-dropdown-icon glyphicon glyphicon-triangle-bottom"></span>
              <ul class="Header-dropdown" id="Header-dropdown">
                <li>
                  <Link className="Header-doc-link Header-doc-punica" activeClassName="Header-active" to="/docs/punica/">
                    Punica
                  </Link>
                </li>
                <li>
                  <Link className="Header-doc-link Header-doc-box" activeClassName="Header-active" to="/docs/punicaBox/">
                    Punica Boxes
                  </Link>
                </li>
                <li>
                  <Link className="Header-doc-link Header-doc-solo" activeClassName="Header-active" to="/docs/soloChain/">
                    Solo Chain
                  </Link>
                </li>
              </ul>
          </div>
            <Link className="Header-link" activeClassName="Header-active" to="/tutorials/">
              Tutorials
          </Link>
            <Link className="Header-link" activeClassName="Header-active" to="/boxes/">
            Boxes
          </Link>
            <Link className="Header-link" activeClassName="Header-active" to="/scpm/">
              Smart Contracts
          </Link>
            
        </div>
        <div className="Header-navPart2 ">
          {pkg.github && (
              <a href={pkg.github} className="Header-link Header-github">
              GitHub
            </a>
          )}
        </div>
      </nav>
    </header>
  </React.Fragment>)
}

export default Header;
