// @flow

import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import "./highlights-theme.css";
import "./static/homeStyle.css";

import Page from "./src/Page";
import Home from './src/Home';
import PageBlog from "./src/PageBlog";
import PageBlogPost from "./src/PageBlogPost";
import PageError from "./src/PageError";
import PageBox from './src/PageBox'
import Docs from './src/Docs'
import ScList from './src/ScList'

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/tutorials/" component={PageBlog} />
    <Route path="/docs/*" component={Docs} />
    <Route path="/scpm/" component={ScList} />
    <Route path="/tutorials/after/:after" component={PageBlog} />
    <Route path="/tutorials/*" component={PageBlogPost} />
    <Route path="/boxes/" component={PageBox} />   
    {/* for static hosting, we often need an explicit 404.html */}
    <Route path="404.html" component={PageError} />
    <Route path="*" component={Page} />
    
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
