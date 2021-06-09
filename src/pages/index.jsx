import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import Link from 'gatsby-link';
import Icons from '../components/Icons';

const IndexPage = () => (
  <main>
    <title>CV - Gabriella Rozsa</title>
    <Container fluid className="px-0 wrapper">
      <Container>
        <Row>
          <Col xs={12} className="pt-5 mt-5 d-flex flex-column justify-content-center">
            <h1 className="text-center">
              Gabriella Rózsa
            </h1>
            <h2 className="text-center">
              Frontend Developer
            </h2>
            <Col className="py-5 d-flex justify-content-center">
              <StaticImage src="../images/profile_img.jpeg" alt="profile img" className="img" />
            </Col>
            <Col className="d-flex justify-content-center pb-5">
              <Icons />
            </Col>
            <Col className="d-flex justify-content-center">
              <Link to="/resume">
                <button type="button" className="font-weight-bold text-white">
                  Check my resume
                </button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default IndexPage;
