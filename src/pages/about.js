import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt=""
        src="../images/kyoto-tea-ceremony-2-M.jpg"
      />
    </Layout>
  );
}

export default AboutPage;