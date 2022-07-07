import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

function IndexPage() {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Tea Ceremony"
          src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001056/img/basic/a0001056_main.jpg?20190718163746&q=80&rw=750&rh=536"
        />
      </Layout>
  );
}

export default IndexPage;
