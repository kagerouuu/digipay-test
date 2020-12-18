import { Box, Button, Drawer, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: 260,
        padding: theme.spacing(2)
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        '& h6': {
            margin: theme.spacing(1, 0)
        }
    },
    signUp: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary
        }
    },
}));

const SideNav = (props) => {
    const { open, onClose, navigation } = props;

    const classes = useStyles();

    return (
        <Drawer
            anchor='left'
            classes={{ paper: classes.root }}
            onClose={onClose}
            open={open}
            variant='temporary'
        >
            <Box className={classes.nav}>
                {
                    navigation.map(nav =>
                        <Typography key={nav.name} variant="h6">
                            <Link to={nav.path} className={classes.link}>{nav.name}</Link>
                        </Typography>)
                }
            </Box>
            <Button style={{ boxShadow: 'none', marginBottom: '16px' }} variant='contained' color="primary">LOGIN</Button>
            <Button className={classes.signUp} variant='outlined' color="primary">SIGN UP</Button>
        </Drawer>
    );
};

export default SideNav;