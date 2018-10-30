// @flow

import * as React from "react";
import Head from "react-helmet";

export default ({ App, render }: PhenomicHtmlPropsType) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === "development"
  const { Main, State, Script, Style } = render(<App />);
  const helmet = Head.renderStatic();
  return (
    // $FlowFixMe helmet is fine
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
      </head>
      {/* // $FlowFixMe it works on my machine */}
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  );
};
