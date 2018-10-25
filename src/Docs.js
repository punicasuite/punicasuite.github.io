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
import '../static/docStyle.css'

class Docs extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps() {

    }
    render() {
        const { isLoading, docs, hasError, doc } = this.props;
        const docList = docs.node ? docs.node.list : []
        return status === "error" ? (
            <PageError error={hasError} />
        ) : (
                <React.Fragment>
                    <Layout
                        title={"Docs"}
                        image=""
                    >
                        {isLoading && <ActivityIndicator />}
                        {!isLoading && (
                            <div class="doc-container">
                                <ul>
                                    {docList.map((item, index) =>
                                        <li key={index} class="box-item">
                                            <Link class="box-title" to={`/docs/${item.id}/`}>{item.title}</Link>
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
        limit:6
    }),
    doc: query({
        path: 'content/docs',
        id: props.params.splat
    })
}));

