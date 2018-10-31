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
) => (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .Header {
          position: relative;
          color:#F8F8FD;
          font-size:2.8rem;
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

        .Home-header {
          background: rgba(0,0,0,0) !important;
        }

        .Header-active {
          color: #00D1EA !important;
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
            <Link className="Header-link" activeClassName="Header-active" to="/docs/punica">
              Docs
          </Link>
            <Link className="Header-link" activeClassName="Header-active" to="/tutorials/">
              Tutorials
          </Link>
            <Link className="Header-link" activeClassName="Header-active" to="/boxes/">
            Boxes
          </Link>
            <Link className="Header-link" activeClassName="Header-active" to="/scpm/">
              Smart contracts
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
  </React.Fragment>
);

export default Header;
