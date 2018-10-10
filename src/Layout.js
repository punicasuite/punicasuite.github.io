// @flow

import * as React from "react";
import Head from "react-helmet";

import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = (
  {
    title,
    image,
    noHero,
    children
  } /*: {
    title?: React.Node,
    image?: string,
    noHero?: boolean,
    children: React.Node
  } */
) => (
  <div className="Layout">
    <style
      dangerouslySetInnerHTML={{
        __html: `
        html { box-sizing: border-box; }
        *, *::before, *::after { box-sizing: inherit; }

        html, body {
          margin: 0;
          padding: 0;

          /* system font https://medium.com/designing-medium/system-shock-6b1dc6d6596f */
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          color: #212529;
        }

        .Layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
        }

        .Layout-body {
          flex: 1 0;
          background:rgba(246,248,249,1);
        }

        .Layout-children {
          position: relative;
          // max-width: 1000px;
          margin: 30px auto;
          border-radius: 3px;
          font-size: 18px;
          line-height: 2;
          width:40%;
        }

        .Layout-children a {
          color: #36484E;
        }

        .Layout-children p {
          font-size:1rem;
          font-family:SourceSansPro-Regular;
          font-weight:400;
          color:rgba(43,64,69,1);
        }

        .Layout-children h2 {
          font-family: SourceSansPro-Bold, sans-serif; 
          font-size: 28px; color: #2B4045; 
          line-height: 24px; 
          font-weigth: 700;
        }

        .Layout-children h3 {
          font-family: SourceSansPro-Semibold, san-serif; 
          font-size: 20px; color: #2B4045; 
          line-height: 24px; 
          font-weight: 600;
        }

        .Layout-children strong {
          font-family: SourceSansPro-Semibold, sans-serif; 
          font-weight: 700;
        }

        .Layout-children pre {
          overflow:scroll;
        }

        .Layout-children blockquote {
          background:rgba(233,237,239,1);
          border-radius:0.19rem;
          margin-block-end: 0;
          margin-block-start: 0;
          margin-inline-end: 0;
          margin-inline-start: 0;
          padding: 12px;
        }

        blockquote  p {
          margin:0 !important;
        }

        .Layout-children p,
        .Layout-children ul,
        .Layout-children ol {
          margin-bottom: 20px;
        }

        .Layout hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          margin: 40px;
        }
        .Layout-children-title {
          width:39rem;
          height:6.06rem;
          font-size:2.63rem;
          font-family:SourceSansPro-ExtraLight;
          font-weight:200;
          color:rgba(43,64,69,1);
          line-height:3.25rem
        }
        .Layout-children-dateAuthor {
          // width:14.31rem;
          height:1.25rem;
          font-size:1rem;
          font-family:SourceSansPro-Bold;
          font-weight:bold;
          color:rgba(106,121,124,1);
          line-height:1.25rem;
          margin-top:15px;
        }
        
      `
      }}
    />
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
    <Header title={title} image={image} light={noHero} />
    <div className="Layout-body">
      <div className="Layout-children">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
