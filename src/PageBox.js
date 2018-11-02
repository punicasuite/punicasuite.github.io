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
import '../static/boxStyle.css'

class PageBox extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps(){

    }

    toGit(github) {
        window.open(github)
    }
    randomIndex() {
        const i = Math.floor(Math.random()*6 + 1)
        return i
    }
    render(){
        const { status } = this.props;
        return status === "error" ? (
            <PageError error={this.props.error} />
        ) : (
                <React.Fragment>
                    <Layout
                        title={"Punica Boxes"}
                        image=""
                        classAttr={"box-layout"}
                    >
                        {status === "loading" && <ActivityIndicator />}
                        {status === "ready" && (
                        <div className="box-container">
                            <ul>
                                {data.map((item,index) => 
                                    <li key={index} className="box-item" onClick={this.toGit.bind(this,item.github)}>
                                        {(item.logo && <img src={item.logo} className="box-logo" />)}
                                        {(!item.logo && <div className={"box-logo box-logo-" + this.randomIndex()}></div>)}
                                        <h3 className="box-title">{item.title}</h3>
                                        <div className="box-tags">
                                            {item.tags.map((tag) => (
                                                <div className={"box-tag " +  'box-tag-'+this.randomIndex()}>
                                                    <i></i>
                                                    <span>{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        
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