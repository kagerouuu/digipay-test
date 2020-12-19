import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import PromoCarousel from "../components/home/promo-carousel"
import AboutDigipaySection from "../components/home/about-digipay-section"

const IndexPage = () => (
  <Layout>
    <PromoCarousel />
    <AboutDigipaySection />
  </Layout>
)

export default IndexPage
