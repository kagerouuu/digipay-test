import { Collapse, Grid, Hidden, makeStyles, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import React, { useEffect, useState } from 'react';
import BillsPayment from '../../images/icons/bills-payment.svg'
import ELoad from '../../images/icons/e-load.svg'
import EPins from '../../images/icons/e-pins.svg'
import MicroInsurance from '../../images/icons/microinsurance.svg'
import MobileMoney from '../../images/icons/mobile-money.svg'

const servicesList = [
    {
        title: 'Bills Payment',
        image: BillsPayment,
        services: [
            [
                'Airlines',
                'Credit Cards',
                'Cable Channel Provider',
                'Consumer Finances',
                'Government Services',
            ],
            [
                'Healthcare',
                'Insurance and Financial Services',
                'Loans',
                'Payment Gateway',
                'Power and Water',
            ],
            [
                'Real Estate',
                'Schools',
                'Telecommunication',
                'Transportation'
            ]
        ]
    },
    {
        title: 'E-Load',
        image: ELoad,
        services: [
            [
                'ABS-CBN',
                'Cignal',
                'Globe',
                'PLDT',
                'Smart',
            ],
            [
                'Sun Cellular',
                'Touch Mobile'
            ]
        ]
    },
    {
        title: 'E-Pins',
        image: EPins,
        services: [
            [
                'Communication',
                'Entertainment',
                'Gaming',
                'Insurance',
                'Power',
            ],
            [
                'Others'
            ],
        ]
    },
    {
        title: 'Mobile Money',
        image: MobileMoney,
        services: [
            [
                'GCash',
                'Paymaya',
                'Smart'
            ]
        ]
    },
    {
        title: 'Microinsurance',
        image: MicroInsurance,
        services: [
            [
                'Healthguard',
            ]
        ]
    },
]

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        color: 'black',
        '&>div': {
            textAlign: 'center',
        },
    },
    link: {
        color: 'black',
        '&:hover': {
            textDecoration: 'none',
            color: `${theme.palette.text.primary} !important`,
        }
    },
    title: {
        color: 'black',
        marginBottom: theme.spacing(2)
    },
    servicesList: {
        '& > div': {
            width: '100%',
            backgroundColor: 'transparent',
            borderRadius: '16px',
            textAlign: 'left',
            margin: theme.spacing(0, 3),
            '& > p': {
                margin: theme.spacing(1),
            }
        }
    },
    mobileServicesList: {
        paddingTop: theme.spacing(2)
    }
}))

const ServiceGroupCard = ({ onMouseOver, service, selectedService }) => {
    const [hovered, setHovered] = useState(false);

    const classes = useStyles();

    const theme = useTheme();

    const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));

    useEffect(() => {
        if (selectedService) {
            setHovered(selectedService.title === service.title)
        }
    }, [selectedService])

    const handleMouseOver = () => {
        onMouseOver(service);
    }

    return (
        <Grid
            item
            xs={12}
            sm={2}
            onMouseOver={handleMouseOver}
            style={{ borderBottom: !isMobile && hovered ? `3px solid ${theme.palette.primary.main}` : 'none' }}
        >
            <img src={service.image} alt={service.title} width="120px" />
            <Typography variant="h5" style={{ color: 'black' }}>{service.title}</Typography>
            <Hidden smUp>
                {
                    hovered ?
                        <div className={classes.mobileServicesList}>
                            {
                                service.services.flat().map(item =>
                                    <Typography key={item}>
                                        <Link to="/" className={classes.link}>{item}</Link>
                                    </Typography>
                                )
                            }
                        </div> :
                        null
                }
            </Hidden>
        </Grid>
    )
}

const ServiceSection = () => {
    const classes = useStyles();

    const [selectedService, setSelectedService] = useState(null);

    return (
        <Grid className={classes.root} container justify="space-evenly" spacing={5}>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>What are you looking for?</Typography>
            </Grid>
            {
                servicesList.map((service) =>
                    <ServiceGroupCard
                        onMouseOver={setSelectedService}
                        service={service}
                        selectedService={selectedService}
                    />
                )
            }
            <Hidden xsDown>
                <Grid
                    container
                    item
                    xs={12}
                    className={classes.servicesList}
                    spacing={1}
                >
                    {
                        selectedService?.services.map((group, index) =>
                            <Grid key={index} item xs={3}>
                                {
                                    group?.map(item =>
                                        <Typography key={item}>
                                            <Link to="/" className={classes.link}>{item}</Link>
                                        </Typography>
                                    )
                                }
                            </Grid>
                        )
                    }
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default ServiceSection;