import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        '& .Carousel-indicators-14': {
            position: 'absolute',
            bottom: 10
        }
    }
}));

const PromoCarousel = () => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "home/digipadala-website-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(relativePath: { eq: "home/digipadalasuki.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(relativePath: { eq: "home/digipay-pay-your-bills.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file(relativePath: { eq: "home/digipayaman.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <Carousel className={classes.container} interval={4000} animation="slide" autoPlay="true">
            {
                Object.entries(data).map(data => <Img fluid={data[1].childImageSharp.fluid} />)
            }
        </Carousel>
    );
};

export default PromoCarousel;