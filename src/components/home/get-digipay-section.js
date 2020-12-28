import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SignUp from '../../images/home/signup.gif';
import Download from '../../images/home/download.gif';
import Pay from '../../images/home/pay.gif'
import Laptop from '../../images/home/laptop.png'
import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core';

const makeItem = (number, icon, title, description) => ({ number, icon, title, description });

const items = [
    makeItem("01", Download, "DOWNLOAD", "Download the App from the Playstore."),
    makeItem("02", SignUp, "SIGN UP", "Fill up the application form and submit the requirements needed."),
    makeItem("03", Pay, "PAY", "Digipay Sales will contact agent to verify application. Deposit the payment."),
]

const useStyles = makeStyles(theme => ({
    header: {
        color: 'black',
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
        marginBottom: theme.spacing(5)
    },
    itemNumber: {
        display: 'flex',
        justifyContent: 'center',
        "& h1": {
            fontSize: 72,
            color: "#595959",
            fontWeight: 'bolder',
            lineHeight: 1.2,
        }
    },
    itemDescription: {
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
        "& h3": {
            color: 'black'
        },
        "& h6": {
            color: '#737373'
        }
    }
}));

const GetDipigaySection = () => {
    const classes = useStyles();

    return (
        <Box p={3} mt={2}>
            <Typography variant="h1" className={classes.header}>HOW TO BE A DIGIPAY AGENT?</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    {
                        items.map((item, index) =>
                            <ScrollAnimation animateIn="fadeInLeft" delay={index * 200}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={4} className={classes.itemNumber}>
                                        <Typography variant="h1">{item.number}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8} className={classes.itemDescription}>
                                        <img width="75px" src={item.icon} alt={item.title} />
                                        <Typography variant="h3">{item.title}</Typography>
                                        <Typography variant="h6">{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            </ScrollAnimation>
                        )
                    }
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={6}>
                        <img width="100%" src={Laptop} alt="Laptop" />
                    </Grid>
                </Hidden>
            </Grid>
        </Box>
    );
};

export default GetDipigaySection;