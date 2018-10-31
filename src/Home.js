// @flow

import * as React from "react";
import Head from "react-helmet";

import Header from "./Header.js";
import Footer from "./Footer.js";

const Home = (
    {} 
) => (
        <div className="Layout">
            <div className="Layout-body home-bg">
                <Head>
                    <html lang="en" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>{"Punica"}</title>
                </Head>
                <Header headerClass={"Home-header"}/>
            </div>
            <Footer />
        </div>
    );

export default Home;
