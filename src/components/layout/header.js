import { AppBar, Button, Hidden, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "gatsby-theme-material-ui";
import Img from "gatsby-image";
import MenuIcon from '@material-ui/icons/Menu';
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    background: 'white',
  },
  link: {
    padding: theme.spacing(2),
    '&:hover': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      textDecoration: 'none',
    }
  },
  button: {
    margin: theme.spacing(0, 1)
  },
  logoContainer: {
    flexGrow: 1
  },
  signUp: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.secondary
    }
  },
  menuIcon: {
    color: theme.palette.primary.main,
  }
}));

const Header = ({ onSidenavOpen, navigation }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "digipay-logo.png" }) {
        childImageSharp {
          fixed(width: 252, height: 74) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ height: 100 }}>
          <div className={classes.logoContainer}>
            <Img fixed={data.file.childImageSharp.fixed} />
          </div>
          <Hidden mdDown>
            {
              navigation.map(nav =>
                <Typography key={nav.name} variant="h6">
                  <Link to={nav.path} className={classes.link}>{nav.name}</Link>
                </Typography>)
            }
            <Button className={classes.button} color="primary" variant="contained" style={{ boxShadow: 'none' }}>LOGIN</Button>
            <Button className={classes.signUp} color="primary" variant="outlined">SIGN UP</Button>
          </Hidden>
          <Hidden lgUp>
            <IconButton className={classes.menuIcon} onClick={onSidenavOpen}>
              <MenuIcon/>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
