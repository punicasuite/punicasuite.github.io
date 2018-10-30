// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

const LatestPosts = (
  { node, error } /*: { node?: Object, error?: Object } */
) => (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .LatestPosts {
          margin-bottom: 20px;
        }

        .LatestPosts h2 {
          text-align: center;
          margin: 0;
          padding: 20px;
          color: #323232;
        }

        .LatestPosts-list {
            margin: 0 auto;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .LatestPosts-list-item {
          width:600px;
          margin-right:15px;
          background: rgba(255,255,255,1);
          border-radius: 0.19rem;
          padding:2rem;
          margin-bottom:1rem;
          border-left:3px solid rgba(255,255,255,1);
        }


        .LatestPosts-list-item:hover {
          border-left:3px solid #32A4BE;
        }

        .LatestPosts-list-item:hover .LatestPosts-list-item-link {
          color:#32A4BE !important;
          text-decoration:none;
        }

        .LatestPosts-list-item:hover .LatestPosts-list-item-date{
          color:#6A797C !important;
        }
        
        .LatestPosts-list-item-link {
          color: #36484E;
          font-size:1.5rem;
          font-family:SourceSansPro-Regular;
          font-weight:400;
          line-height:1.94rem;
          text-decoration:none;
          display:block;
        }

        .LatestPosts-list-item-line {
          width:100%;
          height:1px;
          background:#E9EDEF;
          margin-top:1rem;
        }
        .LatestPosts-list-item-date {
          height:1.25rem;
          font-size:1rem;
          font-family:SourceSansPro-Bold;
          font-weight:bold;
          color:#AAB3B4;
          line-height:1.25rem;
          margin-top:10px;
        }

        .LatestPosts-nav {
          font-size: 14px;
          margin-top: 40px;
          text-align: center;
        }

        .LatestPosts-nav a {
          color: #0067b9;
        }
        `
      }}
    />
    <div className="LatestPosts">
      {error && <div className="error">{error.statusText}</div>}
      {node &&
        node.list && (
          <React.Fragment>
            <ul className="LatestPosts-list">
              {node.list.map(post => (
                <li key={post.id} className="LatestPosts-list-item">
                  <Link
                    to={`/tutorials/${post.id}/`}
                    className="LatestPosts-list-item-link"
                  >
                    {post.title || post.id}
                  </Link>
                  <div class="LatestPosts-list-item-line"></div>
                  <div class="LatestPosts-list-item-date">At {post.date} By {post.author}</div>
                </li>
              ))}
            </ul>
            <div className="LatestPosts-nav">
              {node &&
                node.previous && (
                  <Link
                    to={
                      node.previousPageIsFirst
                        ? `/tutorials/`
                        : `/tutorials/after/${node.previous}/`
                    }
                  >
                    Newer posts
                  </Link>
                )}{" "}
              {node &&
                node.next && (
                  <Link to={`/tutorials/after/${node.next}/`}>Older posts</Link>
                )}
            </div>
          </React.Fragment>
        )}
    </div>
  </React.Fragment>
);

export default LatestPosts;
