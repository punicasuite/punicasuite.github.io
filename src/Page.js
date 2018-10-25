// @flow

import * as React from "react";
import {
  withPhenomicApi,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

import Layout from "./Layout";
import PageError from "./PageError";
import ActivityIndicator from "./ActivityIndicator";

const Page = ({ hasError, isLoading, page, posts }) =>
  hasError ? (
    <PageError error={page.error} />
  ) : (
    <React.Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .Page {
          position: relative;
        }

        .Page-content {
          margin-bottom: 40px;
        }
        `
        }}
      />
      <Layout
        title={"Home Page"}
      >
        {isLoading && <ActivityIndicator />}
        {!isLoading && (
          <React.Fragment>
            <div>
              <p>
                Home page here
              </p>
            </div> 

          </React.Fragment>
        )}
      </Layout>
    </React.Fragment>
  );

export default withPhenomicApi(Page, props => ({
}));
