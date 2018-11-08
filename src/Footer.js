// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

const Footer = () => (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        
        `
      }}
    />
    <footer className="Footer">
      <div className="Footer-content">
        <nav className="Footer-part">
          <div className="Footer-link ">
            <Link className="Footer-link-ontology" to="https://ont.io" target="_blank">
            </Link>
          </div>
          <div className="Footer-link ">
            < Link className="Footer-link-smartx" to="https://smartx.ont.io" target="_blank" >
            </Link>
          </div>
          <div className="Footer-link ">
            < Link className="Footer-link-cyano"
              to="https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm?utm_source=chrome-ntp-icon"
              target="_blank" >
              Cyano Wallet
            </Link>
          </div>
          
          
          
        </nav>
        <div className="Footer-part">
          <div className="Footer-copyright">
          © {new Date().getFullYear()}, {pkg.title}
          </div>
        </div>

        <div className="Footer-part">
          <div className="Footer-link">
            < Link className="Footer-link" to="https://truffleframework.com"
              target="_blank" >
              Acknowledgement to Truffle Framework
          </Link>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
