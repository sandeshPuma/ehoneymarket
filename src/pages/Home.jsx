import React from 'react';

import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';

import OgHon from '../assets/images/OgHoney.png';

import Services from '../services/Services';

const Home = () => {

  const year = new Date().getFullYear();
  return <Helmet title={Home}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending Flavours in years{year}
              </p>
              <h2> Dive in the flavour of Original Taste</h2>
              <p>Nepali honey, particularly the variety known as “MAHA” is renowned worldwide for its unique properties123. This honey is harvested high up in the Himalayan mountains of Nepal, where the world’s largest honey bees collect nectar and pollen from a unique species of rhododendron123.
                  The bees convert this nectar into a special healing honey at their cliffside hives1. This honey, has a distinctive flavor and is known for its effects on the mind, body, and spirit1.😊</p>

                  <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>Shop now</Link></motion.button>
            </div>
          </Col>

          <Col lg='4' md='8'>
            <div className='Og__Hon'>
              <img src={OgHon} alt="heroImg" />
            </div>
          </Col>



        </Row>
      </Container>
      </section>

      <Services/>
     </Helmet>
}

export default Home