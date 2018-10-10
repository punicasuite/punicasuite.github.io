import * as React from 'react'
import {
    withInitialProps,
    query,
    BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";
import PageError from "./PageError";
import ActivityIndicator from "./ActivityIndicator";

import data from '../content/boxes/data.json'

class PageBox extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps(){

    }
    render(){
        const { status } = this.props;
        return status === "error" ? (
            <PageError error={this.props.error} />
        ) : (
                <React.Fragment>
                    <Layout
                        title={"Boxes"}
                        image=""
                    >
                        {status === "loading" && <ActivityIndicator />}
                        {status === "ready" && (
                        <div>
                            <ul>
                                {data.map((item,index) => 
                                    <li key={index}>
                                        <p>{item.title}</p>
                                        <p>{item.repo}</p>
                                        <p>{item.tags}</p>
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

export default withInitialProps(PageBox)