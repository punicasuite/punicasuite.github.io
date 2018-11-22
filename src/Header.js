// @flow

import * as React from "react";
import { Link } from "@phenomic/preset-react-app/lib/client";

import pkg from "../package.json";

const Header = (
  {
    title,
    image,
    headerClass
  } /*: {
    title?: React.Node,
    image?: string,
    light?: boolean
  } */
) => {
  function handleHover() {
    document.getElementById('Header-dropdown').style.display = 'block';
  }
  function handleLeave() {
    document.getElementById('Header-dropdown').style.display = 'none';
  }
  return (
  <React.Fragment>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        
      `
      }}
    />
  
      <nav class="navbar-fixed-top navbar ">
              <div class="container-fluid">

    <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
            <Link className="Header-link Header-brand" activeClassName="Header-active" to="/">
                    Home
                  </Link>
                </div>


    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Suite <span class="caret"></span></a>
                <ul class="dropdown-menu Header-dropdown ">
                        <li>
                    <Link className="Header-doc-link Header-doc-punica" activeClassName="Header-active" to="/docs/punica/">
                      Punica
                        </Link>
                        </li>
                        <li>
                    <Link className="Header-doc-link Header-doc-box" activeClassName="Header-active" to="/docs/punicaBox/">
                      Punica Boxes
                        </Link>
                        </li>
                        <li>
                    <Link className="Header-doc-link Header-doc-solo" activeClassName="Header-active" to="/docs/soloChain/">
                      Solo Chain
                        </Link>
                        </li>
                  <li>
                    <Link className="Header-doc-link Header-doc-scExtension" activeClassName="Header-active" to="/docs/sc-exten/">
                      SC Extension
                        </Link>
                  </li>
                      </ul>
                    </li>
                    
                    <li>
                <Link className="Header-link" activeClassName="Header-active" to="/tutorials/">
                  Tutorials
                </Link>
                    </li>
                    <li>
                <Link className="Header-link" activeClassName="Header-active" to="/boxes/">
                  Boxes
                </Link>
                    </li>
                    <li>
                      <Link className="Header-link" activeClassName="Header-active" to="/scpm/">
                        Smart Contracts
                            </Link>
                    </li>
                  </ul>
                  
                    <ul class="nav navbar-nav navbar-right">
                      <li>
                        <a href={pkg.github} className="Header-link Header-github">
                          GitHub
                       </a>
                      </li>
                      
                    </ul>
    </div>
  </div>
</nav>
  </React.Fragment>)
}

export default Header;
