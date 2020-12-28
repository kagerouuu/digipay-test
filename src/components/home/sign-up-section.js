import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        padding: theme.spacing(6),
        '& > div > div > h1': {
            lineHeight: 1.2,
            padding: theme.spacing(2, 6),
            color: 'white',
            fontWeight: 'bolder'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }
    },
    button: {
        color: theme.palette.primary.main,
        backgroundColor: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        padding: theme.spacing(2, 6),
        maxWidth: 240,
        '& h1': {
            lineHeight: 1.2,
        }
    }
}))

const SignUpSection = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={6}>
                <ScrollAnimation animateIn="bounceInLeft">
                    <Typography variant="h1">Want to be a Digipay Agent?</Typography>
                </ScrollAnimation>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ScrollAnimation animateIn="bounceInRight">
                    <div className={classes.button}>
                        <Typography variant="h1">SIGN UP</Typography>
                    </div>
                </ScrollAnimation>
            </Grid>
        </Grid>
    );
};

export default SignUpSection;