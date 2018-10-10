// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

const Header = (
  {
    title,
    image,
    light
  } /*: {
    title?: React.Node,
    image?: string,
    light?: boolean
  } */
) => (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .Header {
          position: relative;
          background:#0D181A;
          color:#ffffff;
        }

        .Header-nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0 auto;
          padding: 0;
          line-height: 3rem;
          background: #0D181A;
          border-top: 4px solid  #444444;
        }

        .Header-navPart1,
        .Header-navPart2 {
          display: flex;
          flex-direction: row;
        }

        .Header-link {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          color: inherit;
          text-decoration: none !important;
          transition: 0.25s all;
          border-bottom: 4px solid transparent;
        }

        .Header-link:hover,
        .Header-link:focus {
          color: inherit;
          border-bottom-color: #3E85D2;
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
      `
      }}
    />
    <header className="Header">
      <nav className="Header-nav">
        <div className="Header-navPart1">
          <Link className="Header-link" to="/">
            Home
          </Link>
            <Link className="Header-link" to="/boxes/">
            Boxes
          </Link>
        </div>
        <div className="Header-navPart2">
          {pkg.github && (
            <a href={pkg.github} className="Header-link">
              GitHub
            </a>
          )}
        </div>
      </nav>
      {light ? (
        // <div className="Header-light">
        //   {title && <h1 className="Header-light-title">{title}</h1>}
        // </div>
        <div></div>
      ) : (
        <div className="Header-hero">
          {title && <h1 className="Header-hero-title">{title}</h1>}
        </div>
      )}
      {/* <div className="Header-light">
        {title && <h1 className="Header-light-title">{title}</h1>}
      </div> */}
    </header>
  </React.Fragment>
);

export default Header;
