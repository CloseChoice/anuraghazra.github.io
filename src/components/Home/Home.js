import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';
import { faBrain } from '@fortawesome/free-solid-svg-icons'

import {
  faPython,
  faOsi
//  faRust,
//  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={faBrain} />
      </CardIcon>
      <CardTitle>Artifical Intelligence</CardTitle>
      <CardText>
        I like putting together algorithms to solve real world problems. 
        AI can be a game changer when used in the right circumstances.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={faPython} />
      </CardIcon>
      <CardTitle>Python</CardTitle>
      <CardText>
        I love the flexibility and speed when developing in Python. The ecosystem is
        overwhelming.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={faOsi} />
      </CardIcon>
      <CardTitle>Open Source Software</CardTitle>
      <CardText>
        I love both using and developing open source software. 
        I truely believe that this makes the ecosystem healthier and better when
        access to critical software is democratized.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>TOBIAS PITTERS</h1>
          <p className="adjust">doing machine learning and data science</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/CloseChoice"
              />
              <IconLink
                label="github"
                icon={['fab', 'linkedin']}
                href="//linkedin.com/in/tobias-pitters-770667199/"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
