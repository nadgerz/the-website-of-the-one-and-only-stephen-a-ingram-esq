import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import me from '../assets/images/foto.png';
import cvPDF from '../assets/pdf/2019_Ingram_CV.pdf';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <div className={'home-wrapper'}>
        <div className={'profile-img'}>
          <img src={me} alt="It's me, Steve!" width="285" height="427" />

          <p>Need some help?</p>

          <Link to="/contact">Contact me!</Link>

          <br />
          <br />

          <a href={cvPDF} download={`Stephen_A_Ingram_CV`}>
            Download My CV
          </a>
        </div>

        <div className={'profile-txt'}>
          <h1>Hello.</h1>
          <h2>
            <p>
              I'm Steve, a full-stack developer with over 20 years experience in
              backend and frontend development in GIS/mapping products for major
              US Utility companies.
            </p>
            <p>
              I work with JavaScript, React, React-Native, Java, PostgreSQL and
              many of their friends.
            </p>
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
