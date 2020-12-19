import { Box, Button, Grid, Hidden, makeStyles, TextField, Typography } from '@material-ui/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
    root: {
        height: '320px',
        position: 'relative',
        '& img': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1
        },
        '& > div': {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            padding: theme.spacing(2),
            alignContent: 'center'
        },
        '& h5': {
            marginBottom: theme.spacing(2)
        },
    },
    link: {
        color: 'black',
        marginBottom: theme.spacing(2),
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.text.primary,
        }
    },
    signupSection: {
        '& .MuiFormControl-root, .MuiTextField-root': {
            marginBottom: theme.spacing(1)
        },
        '& button': {
            display: 'block',
            marginTop: theme.spacing(1)
        },
    }
}));

const BackgroundImage = ({ children }) => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/bldg-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className={classes.root}>
            <Img fluid={data.file.childImageSharp.fluid} />
            {children}
        </div>
    )
}

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <BackgroundImage>
                <Grid container justify="space-evenly" spacing={1}>
                    <Hidden xsDown>
                        <Grid item xs={3}>
                            <Typography variant="h5" color="textPrimary">SERVICES</Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Digipay</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>DigiPadala - Agent</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>DigiPadala - Customer</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>DigiProtec<sup>+</sup></Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h5" color="textPrimary">CONTACT</Typography>
                            <Box display="flex" alignItems="center" mb={2}>
                                <PhoneIcon fontSize="small" color="primary" />
                                <Typography variant="h6" style={{ color: 'black', marginLeft: '8px' }}>
                                    8 +254 6621
                        </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <MailOutlineIcon fontSize="small" color="primary" />
                                <Typography variant="h6" style={{ color: 'black', marginLeft: '8px' }}>
                                    info@digipay.ph
                        </Typography>
                            </Box>
                            <Box display="flex" alignItems="flex-start" mb={2}>
                                <PhoneIphoneOutlinedIcon fontSize="small" color="primary" />
                                <Typography variant="h6" style={{ color: 'black', marginLeft: '8px' }}>
                                    0908 212 4828(Smart) / 0906 374 0371(Globe)
                        </Typography>
                            </Box>
                            <Box display="flex" alignItems="flex-start" mb={2}>
                                <LocationOnOutlinedIcon fontSize="small" color="primary" />
                                <Typography variant="h6" style={{ color: 'black', marginLeft: '8px' }}>
                                    6F, G Business Hub, 728 Shaw Boulevard, Mandaluyong City, 1552
                        </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h5" color="textPrimary">CAREER</Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Sales</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Accounting</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Tech</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Operations</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Marketing</Link>
                            </Typography>
                            <Typography className={classes.link} variant="h6">
                                <Link>Admin</Link>
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item xs={12} sm={3} className={classes.signupSection}>
                        <TextField fullWidth variant="outlined" label="Email Address" />
                        <TextField fullWidth variant="outlined" label="Phone Number" />
                        <Button fullWidth variant="contained" color="primary">SIGN UP</Button>
                        <Box display="flex" alignItems="center" mt={3} justifyContent="flex-end">
                            <Typography variant="h5" style={{ margin: 0 }}>FOLLOW US: </Typography>
                            <FacebookIcon color="primary" fontSize="small" />
                            <InstagramIcon color="primary" fontSize="small" />
                            <LinkedInIcon color="primary" fontSize="small" />
                        </Box>
                    </Grid>
                </Grid>
            </BackgroundImage>
        </>
    );
};

export default Footer;