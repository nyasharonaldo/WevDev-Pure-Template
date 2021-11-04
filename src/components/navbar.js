import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import scrollTo from "gatsby-plugin-smoothscroll";

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
                  onClick={this.toggleClass}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/"></Link>
              </div>

              <div
                className={classnames("collapse navbar-collapse", {
                  "collapse in": this.state.active,
                })}
                id="navbar-collapse-uarr"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li
                    className={classnames("", {
                      "dropdown active": this.state.active,
                    })}
                  >
                    <button to="/" className="btn btn-link navbar-btn" onClick={() => scrollTo("#home")}>
                      Welcome to Southern Chippings
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-link navbar-btn" onClick={() => scrollTo("#uses")}> Uses</button>
                  </li>
                  <li>
                    <button className="btn btn-link navbar-btn" onClick={() => scrollTo("#lifecycle")}> Lifecycle </button>
                  </li>
                  <li>
                    <p>
                      <button
                        onClick={() => scrollTo("#pricing")}
                        className="btn btn-primary navbar-btn"
                      >
                        Pricing
                      </button>
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
