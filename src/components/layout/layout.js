import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { useMediaQuery } from "@material-ui/core"
import SideNav from "./sidenav"
import Footer from "./footer"

const navigation = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'PROMOS',
    path: '/'
  },
  {
    name: 'FAQs',
    path: '/'
  },
  {
    name: 'TERMS',
    path: '/'
  },
  {
    name: 'POLICY',
    path: '/'
  },
  {
    name: 'CAREERS',
    path: '/'
  },
  {
    name: 'DIGIPADALA BRANCH LOCATOR',
    path: '/'
  },
]

const Layout = ({ children }) => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const handleSidenavOpen = () => {
    setOpenSidenav(true);
  };

  const handleSidenavClose = () => {
    setOpenSidenav(false);
  };

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'), {
    defaultMatches: true,
    noSsr: true
  });

  const shouldOpenSidenav = isMobile ? openSidenav : false;

  return (
    <>
      <Header onSidenavOpen={handleSidenavOpen} navigation={navigation} />
      <SideNav navigation={navigation} open={shouldOpenSidenav} onClose={handleSidenavClose} />
      <div style={{ marginTop: 100 }}>
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
