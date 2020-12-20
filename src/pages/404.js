import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import Img from 'gatsby-image'
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  notice: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    color: 'red',
    textAlign: 'center',
    '& h2, h3': {
      color: 'black'
    },
    '& a': {
      color: theme.palette.text.primary
    }
  }
}));

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404/ai-nagulat.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Img fluid={data.file.childImageSharp.fluid} />
          
        </Grid>
        <Hidden smDown>
          <Grid item xs={4} className={classes.notice}>
            <div>
              <Typography variant="h1" style={{ fontSize: 72 }}>Whoops!</Typography>
              <Typography variant="h2">The page you're requesting does not seem to exist!</Typography>
              <Typography variant="h3">Send me back <Link to="/">home</Link></Typography>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Layout>
  )
}

export default NotFoundPage
