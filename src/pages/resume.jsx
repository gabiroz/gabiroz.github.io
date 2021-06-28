import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import {
  education, languages, personalInformation, workExperience,
} from '../utils/data';
import Icons from '../components/Icons';
import '../styles/main.scss';

const Resume = () => (
  <Container fluid className="pt-4 wrapper">
    <Container className="xs-fluid">
      <title>CV - Gabriella Rozsa</title>
      <Row>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 0 }} className="px-0 py-4">
          <Col className="py-4">
            <StaticImage src="../images/profile_img.jpeg" alt="profile img" className="img" />
          </Col>
          <h2 className="h3">Gabriella Rózsa</h2>
          {personalInformation.map((t) => (
            <Col xs={12} key={t.key} className="py-2">
              <h4>{t.title}</h4>
              <h5>{t.value}</h5>
            </Col>
          ))}
          <Col>
            <Row noGutters className="pt-4">
              <Icons />
            </Row>
          </Col>
        </Col>
        <Col xs={{ span: 12, order: 0 }} md={{ span: 7, order: 1 }} className="px-0">
          <Col xs={12}>
            <h2 className="h3">Work Experience</h2>
            {workExperience.map((t) => (
              <Container key={t.key} className="py-2">
                <h5>{t.company}</h5>
                <h6>{t.interval}</h6>
                <p className="mb-2">{t.text}</p>
                <Row noGutters>
                  {t.technologies.map((item) => (
                    <div key={Math.random()} className="pr-2">
                      •
                      {' '}
                      {item}
                    </div>
                  ))}
                </Row>
              </Container>
            ))}
          </Col>
          <Col xs={12}>
            <h2 className="h3">Education</h2>
            {education.map((t) => (
              <Container key={t.key} className="py-2">
                <h4>{t.school}</h4>
                <h5>{t.course}</h5>
                <h6>{t.class}</h6>
                <h6>{t.specialization}</h6>
                <h6>{t.interval}</h6>
                <Row noGutters>
                  {t.technologies.map((item) => (
                    <div key={Math.random()} className="pr-2">
                      •
                      {' '}
                      {item}
                    </div>
                  ))}
                </Row>
              </Container>
            ))}
          </Col>
          <Col xs={12}>
            <h2 className="h3">Languages</h2>
            {languages.map((t) => (
              <Container key={t.key} className="py-1">
                <h6>
                  •
                  {' '}
                  {t.language}
                  {' '}
                  {t.level}
                  {' '}
                  {t.exam}
                </h6>
              </Container>
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Resume;
