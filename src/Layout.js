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
    children,
    classAttr
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

        p {
          margin:0
        }
        html, body {
          margin: 0;
          padding: 0;

          /* system font https://medium.com/designing-medium/system-shock-6b1dc6d6596f */
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          color: #212529;
          font-size:16px;
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
          margin: 30px auto;
          border-radius: 3px;
          line-height: 2;
          padding:10px;
          background:#ffffff;
        }

        .body-render table {
          table-layout: fixed;
          width:610px;
          border:1px solid #dddddd;
        }

        .body-render table td {
          word-wrap: break-word;
          workd-break: break-all;
        }

        .body-render a {
          color: #36484E;
        }

        .body-render p {
          font-size:1rem;
          font-family:SourceSansPro-Regular, sans-serif;
          font-weight:400;
          color:#2B4045;
        }

        .body-render h2 {
          font-family: SourceSansPro-Bold, sans-serif; 
          font-size: 28px; color: #2B4045; 
          line-height: 24px; 
          font-weigth: 700;
        }

        .body-render h3 {
          font-family: SourceSansPro-Semibold, san-serif; 
          font-size: 20px; color: #2B4045; 
          line-height: 24px; 
          font-weight: 600;
        }

        .body-render strong {
          font-family: SourceSansPro-Semibold, sans-serif; 
          font-weight: 700;
        }

        .body-render pre {
          overflow:auto;
        }

        .body-render blockquote {
          background:rgba(233,237,239,1);
          border-radius:0.19rem;
          margin-block-end: 0;
          margin-block-start: 0;
          margin-inline-end: 0;
          margin-inline-start: 0;
          padding: 10px 20px;
        }

        .body-render img {
          max-width:620px;
          display:block;
          margin:5px auto;
        }

        blockquote  p {
          margin:0 !important;
        }

        .body-render p,
        .body-render ul,
        .body-render ol {
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
          font-size:2.63rem;
          font-family:SourceSansPro-ExtraLight;
          font-weight:200;
          color:rgba(43,64,69,1);
          line-height:3.25rem
        }
        .Layout-children-dateAuthor {
          height:1.25rem;
          font-size:1rem;
          font-family:SourceSansPro-Bold;
          font-weight:bold;
          color:rgba(106,121,124,1);
          line-height:1.25rem;
          margin-top:5px;
          margin-bottom:25px;
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
    <Header title={title} image={image}/>
    <div className="Layout-body">
      <div className={"Layout-children "+ classAttr}>{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
