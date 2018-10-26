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
import '../static/boxStyle.css'

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
                    <Layout
                        title={"Smart contracts"}
                        image=""
                    >
                        {status === "loading" && <ActivityIndicator />}
                        {status === "ready" && (
                            <div class="box-container">
                                <ul>
                                    {data.map((item, index) =>
                                        <li key={index} class="sc-item">
                                            <h3 class="sc-title">{item.title}</h3>
                                            {item.github && <a href={item.github} target="_blank">Github</a>}
                                            <div class="sc-tags">
                                                {item.tags.map((tag) => (
                                                    <span>{tag}</span>
                                                ))}
                                            </div>

                                            {(item.logo && <img src={item.logo} />)}
                                        </li>
                                    )}
                                </ul>
                            </div>)}
                    </Layout>
                </React.Fragment>
            )

    }
}

export default withInitialProps(ScList)