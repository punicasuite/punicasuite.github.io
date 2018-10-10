// @flow

import * as React from "react";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";

import PageError from "./PageError";
import PostLayoutDefault from "./PostLayoutDefault";
import PostLayoutNoHero from "./PostLayoutNoHero";

const layouts = {
  default: PostLayoutDefault,
  light: PostLayoutNoHero
};

const PageBlogPost = ({ hasError, isLoading, post }) => {
  if (hasError) {
    return <PageError error={post.error} />;
  }

  const PostLayout = layouts.light;
  return <PostLayout isLoading={isLoading} post={post} />;
};

export default withPhenomicApi(PageBlogPost, props => ({
  post: query({ path: "content/posts", id: props.params.splat })
}));
