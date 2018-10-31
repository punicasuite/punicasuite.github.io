import * as React from 'react'
import {
    withPhenomicApi, query, 
    BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";
import PageError from "./PageError";
import ActivityIndicator from "./ActivityIndicator";
import { Route, Link } from "react-router";
import DocBody from './DocBody'

class Docs extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps() {

    }
    render() {
        const { isLoading, docs, hasError, doc,status } = this.props;
        const docList = docs.node ? docs.node.list : []
        docList.sort((a, b)=>{return a.index - b.index})
        return status === "error" ? (
            <PageError error={hasError} />
        ) : (
                <React.Fragment>
                    <Layout
                        title={doc.node?doc.node.title: "Docs"}
                        image=""
                    >
                        {isLoading && <ActivityIndicator />}
                        {!isLoading && (
                            <div className="doc-container">
                                <ul className="doc-ul">
                                    {docList.map((item, index) =>
                                        <li key={index} className="doc-item">
                                            <Link className="doc-title" activeClassName="Header-active" to={`/docs/${item.id}/`}>{item.title}</Link>
                                        </li>
                                    )}
                                </ul>
                                <DocBody doc={doc.node}/> 
                            </div>)}
                    </Layout>
                </React.Fragment>
            )

    }
}

export default withPhenomicApi(Docs, props => ({
    docs: query({
        path: "content/docs",
        limit:6,
        sortBy: "index"
    }),
    doc: query({
        path: 'content/docs',
        id: props.params.splat
    })
}));

