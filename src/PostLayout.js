// @flow

import * as React from "react";
import Head from "react-helmet";
import {
  BodyRenderer,
  textRenderer,
  Link
} from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";
import ActivityIndicator from "./ActivityIndicator";
import backImg from '../static/assets/back_arrow@2x.png';
import '../static/pageStyle.css'
const PostLayoutNoHero = (
  { isLoading, post } /*: { isLoading: boolean, post: Object }*/
) => (
  <Layout title={post && post.node && post.node.title}>
    {isLoading && <ActivityIndicator />}
    {!isLoading &&
      post.node && (
        <React.Fragment>
          <Head>
            <meta
              name="description"
              content={textRenderer(post.node.body).slice(0, 150) + "…"}
            />
          </Head>
          <div className="body-layout">
            <div className="body-title-container">
              <div className="btn-back-container">
                <Link
                  to={'/tutorials/'}
                  className="btn-back" >
                  <span className="glyphicon glyphicon-menu-left" ></span> 
                  <span>Back</span>
              </Link>
              </div>
              <div className="Layout-children-title">{post.node.title}</div>
              <div className="Layout-children-dateAuthor">At {post.node.date} By {post.node.author}</div>
            </div>

            <div className="body-render">
              <BodyRenderer>
                {post.node.body}
              </BodyRenderer>
            </div>
          </div>
        </React.Fragment>
      )}
  </Layout>
);

export default PostLayoutNoHero;
