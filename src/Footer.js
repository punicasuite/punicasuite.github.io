// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

const Footer = () => (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .Footer {
          color:#F8F8FD;
          height:80px;
          background:#3C0D83;
        }
        .Footer-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: auto;
          font-size:2rem;
        }

        .Footer-part {
          height:80px;
          line-height:80px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-left:3rem;
        }

        .Footer-copyright {
          padding-right:3rem;
          font-size:16px;
        }

        .Footer-link {
          color:#F8F8FD;
          padding: 10px;
          font-size:20px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          padding-left:54px;
        }

        .Footer-link:hover,
        .Footer-link:focus {
          color: inherit;
        }
        `
      }}
    />
    <footer className="Footer">
      <div className="Footer-content">
        <nav className="Footer-part">
          <Link className="Footer-link-ontology" to="https://ont.io" target="_blank">
          </Link>
           < Link className = "Footer-link-smartx" to = "https://smartx.ont.io" target = "_blank" >
          </Link>
          < Link className = "Footer-link-cyano"
          to = "https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm?utm_source=chrome-ntp-icon"
          target = "_blank" >
            Cyano Wallet
            </Link>
        </nav>
        <div className="Footer-part">
          <div className="Footer-copyright">
          © {new Date().getFullYear()}, {pkg.title}
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
