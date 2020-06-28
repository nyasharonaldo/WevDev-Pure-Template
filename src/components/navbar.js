import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

class navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <>
        <header>
          <nav className="navbar  navbar-fixed-top navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle uarr collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse-uarr"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/" title=""></Link>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbar-collapse-uarr"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/" title="" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" title="">
                      {" "}
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" title="">
                      {" "}
                      Pricing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" title="">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" title="">
                      Components
                    </Link>
                  </li>
                  <li>
                    <p>
                      <Link
                        to="/download"
                        className="btn btn-primary navbar-btn"
                        title=""
                      >
                        Download
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default navbar;
