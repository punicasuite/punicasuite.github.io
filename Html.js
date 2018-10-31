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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(designWidth, maxWidth) {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
    var rem = width * 10 / designWidth;
    console.log('rem: '+ rem)
		remStyle.innerHTML = 'html{font-size: ' + rem + 'px !important; }';
	}

	if (docEl.firstElementChild) {
          docEl.firstElementChild.appendChild(remStyle);
        } else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();

	win.addEventListener("resize", function() {
          clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
          clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
          doc.body.style.fontSize = "16px";
        } else {
          doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "16px";
          }, false);
	}
})(1920, 1920);
            `
          }}
        />
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
