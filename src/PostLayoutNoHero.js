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
import '../static/style.css'
const PostLayoutNoHero = (
  { isLoading, post } /*: { isLoading: boolean, post: Object }*/
) => (
  <Layout title={post && post.node && post.node.title} noHero>
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
          <div class="btn-back-container">
            
            <Link
              to={'/blog/'}
              class="btn-back"
            >
              {/* <img src={backImg} class="back-icon" /> */}
              Back
            </Link>
          </div>

          <div class="Layout-children-title">{post.node.title}</div> 
          <div class="Layout-children-dateAuthor">At {post.node.date} By {post.node.author}</div>
          <BodyRenderer>{post.node.body}</BodyRenderer>
        </React.Fragment>
      )}
  </Layout>
);

export default PostLayoutNoHero;
