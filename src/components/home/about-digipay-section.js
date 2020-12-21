import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        padding: theme.spacing(20, 15),
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(8, 5)
        },
    }
}))

const AboutDigipaySection = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" color="textSecondary">
                <span style={{ fontWeight: 'bold' }}>Digipay</span> is a digital payments and financial services platform with
                a mobile wallet, an industry leading biller ecosystem,
                and an interoperable backend.
            </Typography>
        </div>
    );
};

export default AboutDigipaySection;