import { Button, Grid, Link, makeStyles, useMediaQuery } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import Playstore from '../../images/home/playstore.png';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        marginTop: theme.spacing(3),
        minWidth: 1200,
        '& > img': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
        },
        '& > div': {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            alignContent: 'center',
        },
        '& h5': {
            marginBottom: theme.spacing(2)
        },
    },
    googlePlayButton: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    downloadButton: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
}));

const BackgroundImage = ({ children }) => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "home/bg-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      image2: file(relativePath: { eq: "home/phone.png" }) {
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
            <Img style={{minHeight: '800px'}} fluid={data["image1"].childImageSharp.fluid} />
            {children(data)}
        </div>
    )
}

const DigipayAppSection = () => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const classes = useStyles();

    return (
        <BackgroundImage>
            {
                data =>
                    <Grid container style={{width: '95vw'}}>
                        <Grid item xs={12} sm={6}>
                            <Img style={{ width: isMobile ? '100%' : '100%' }} fluid={data["image2"].childImageSharp.fluid} />
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            item
                            xs={12}
                            sm={6}
                        >
                            <Grid item xs={12} className={classes.googlePlayButton}>
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.fsgcapital.digipay&hl=en"
                                    target="_blank"
                                >
                                    <img style={{width: '100%'}} src={Playstore} alt="playstore" />
                                </Link>
                            </Grid>
                            <Grid item xs={12} className={classes.downloadButton}>
                                <Button 
                                    href="https://play.google.com/store/apps/details?id=com.fsgcapital.digipay&hl=en"
                                    target="_blank"
                                    variant="contained"
                                >
                                    Available on Desktop and Android Devices
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
            }
        </BackgroundImage>
    );
};

export default DigipayAppSection;