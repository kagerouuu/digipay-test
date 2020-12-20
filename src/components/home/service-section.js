import { Collapse, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import React, { useState } from 'react';
import BillsPayment from '../../images/icons/bills-payment.svg'
import ELoad from '../../images/icons/e-load.svg'
import EPins from '../../images/icons/e-pins.svg'
import MicroInsurance from '../../images/icons/microinsurance.svg'
import MobileMoney from '../../images/icons/mobile-money.svg'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        color: 'black',
        '&>div': {
            padding: theme.spacing(2),
            textAlign: 'center',
            '&:hover': {
                backgroundColor: '#ebeff5'
            },
            '& > :nth-child(3)': {
                marginTop: theme.spacing(3)
            }
        },
    },
    link: {
        color: 'black',
        '&:hover': {
            textDecoration: 'none',
            color: `${theme.palette.text.primary} !important`,
        }
    },
}))

const servicesList = [
    {
        title: 'Bills Payment',
        image: BillsPayment,
        services: [
            'Airlines',
            'Credit Cards',
            'Cable Channel Provider',
            'Consumer Finances',
            'Government Services',
            'Healthcare',
            'Insurance and Financial Services',
            'Loans',
            'Payment Gateway',
            'Power and Water',
            'Real Estate',
            'Schools',
            'Telecommunication',
            'Transportation'
        ]
    },
    {
        title: 'E-Load',
        image: ELoad,
        services: [
            'ABS-CBN',
            'Cignal',
            'Globe',
            'PLDT',
            'Smart',
            'Sun Cellular',
            'Touch Mobile'
        ]
    },
    {
        title: 'E-Pins',
        image: EPins,
        services: [
            'Communication',
            'Entertainment',
            'Gaming',
            'Insurance',
            'Power',
            'Others',
        ]
    },
    {
        title: 'Mobile Money',
        image: MobileMoney,
        services: [
            'GCash',
            'Paymaya',
            'Smart'
        ]
    },
    {
        title: 'Microinsurance',
        image: MicroInsurance,
        services: [
            'Healthguard',
        ]
    },
]

const ServiceSection = () => {
    const classes = useStyles();

    const [selectedService, setSelectedService] = useState(null);

    return (
        <Grid className={classes.root} container justify="space-evenly" spacing={2}> 
            {
                servicesList.map((service, index) =>
                    <Grid item xs={12} sm={2} onMouseOver={() => setSelectedService(index)}>
                        <img src={service.image} width="120px" />
                        <Typography variant="h4" style={{ color: 'black' }}>{service.title}</Typography>
                        <Collapse in={selectedService === index}>
                            {
                                service.services.map(item =>
                                        <Typography>
                                            <Link className={classes.link}>{item}</Link>
                                        </Typography>
                                )
                            }
                        </Collapse>
                    </Grid>
                )
            }
        </Grid>
    );
};

export default ServiceSection;