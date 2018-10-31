// @flow

import * as React from "react";
import Head from "react-helmet";

import Header from "./Header.js";
import Footer from "./Footer.js";

const Layout = (
  {
    title,
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
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
    <Header title={title} />
    <div className="Layout-body">
      <div className={"Layout-children "+ classAttr}>{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
