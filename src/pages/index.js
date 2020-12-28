import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import PromoCarousel from "../components/home/promo-carousel"
import AboutDigipaySection from "../components/home/about-digipay-section"
import ServiceSection from "../components/home/service-section"
import DigipayAppSection from "../components/home/digipay-app-section"
import GetDipigaySection from "../components/home/get-digipay-section"
import SignUpSection from "../components/home/sign-up-section"

const IndexPage = () => (
  <Layout>
    <PromoCarousel />
    <AboutDigipaySection />
    <ServiceSection />
    <DigipayAppSection />
    <GetDipigaySection />
    <SignUpSection />
  </Layout>
)

export default IndexPage
