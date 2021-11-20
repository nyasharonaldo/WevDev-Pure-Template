import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/main.min.css";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import Footer from "./footer";
import CookieConsent from "react-cookie-consent";

const Layout = ({ children, current }) => {
  return (
    <>
      <Helmet></Helmet>
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          enableDeclineButton="true"
          flipButtons="true"
          buttonStyle={{background: "#295e29", color: "#fff"}}
          declineButtonStyle={{background: "#5e5e5e"}}>
      This website uses cookies to enhance the user experience.
      </CookieConsent>
      
      
      <Navbar current={current} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
