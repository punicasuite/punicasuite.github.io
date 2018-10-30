import * as React from 'react'
import {
    withInitialProps,
    query,
    BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";
import PageError from "./PageError";
import ActivityIndicator from "./ActivityIndicator";

import data from '../content/scs/data.json'
import '../static/scList.css'

class ScList extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps() {

    }
    render() {
        const { status } = this.props;
        return status === "error" ? (
            <PageError error={this.props.error} />
        ) : (
                <React.Fragment>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            .sc-keywords: {
                                margin-right:10px;
                            }
                            `}}
                            />
                    <Layout
                        title={"Smart contracts"}
                        image=""
                        classAttr={"sc-list"}
                    >
                        {status === "loading" && <ActivityIndicator />}
                        {status === "ready" && (
                            <div class="box-container">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Language</th>
                                            <th>Keywords</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) =>
                                            <tr key={index} class="sc-item">
                                                <td>{index+1}</td>
                                                <td>
                                                    <a className="sc-link" href={item.github} target="_blank">{item.title}</a>
                                                </td>
                                                <td>{item.language}</td>
                                                <td>
                                                    {item.keywords.map((k,index)=>
                                                        <span className="sc-keywords">{k}</span>
                                                    )}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>  
                            </div>
                        )}
                    </Layout>
                </React.Fragment>
            )

    }
}

export default withInitialProps(ScList)