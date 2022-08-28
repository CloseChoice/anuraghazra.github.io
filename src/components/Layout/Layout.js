import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { themelight, themedark, themedarkblue } from './theme';

import Wrapper from '@common/Wrapper/';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import GlobalStyle from '@src/styles/GlobalStyle';

import '@components/fontLib';
import useDarkMode from '@src/hooks/useDarkMode';
import ThemeToggleContext from './ThemeToggleContext';
import {CookieNotice} from "gatsby-cookie-notice";
import CookieConsent from "react-cookie-consent";

import { setConfiguration } from 'react-grid-system';
setConfiguration({ breakpoints: [576, 769, 992, 1200] });

const RootWrapper = styled(Wrapper)`
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${props => props.theme.media.tablet} {
    margin-top: 50px;
  }
`;

const Layout = ({ children }) => {
  const [theme, toggleTheme, toggleRef] = useDarkMode();

  let currentTheme = theme === 'light' ? themelight : themedark;
  if (theme === 'darkblue') {
    currentTheme = themedarkblue;
  }

  <CookieConsent
  enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
></CookieConsent>
  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />

        <ThemeToggleContext.Provider value={{ theme, toggleTheme, toggleRef }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <RootWrapper>{children}</RootWrapper>
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accept"
          cookieName="gatsby-gdpr-google-analytics"
          declineButtonText="Decline"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses google analytics cookies to optimize convenience for its users.{" "}
        </CookieConsent>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
