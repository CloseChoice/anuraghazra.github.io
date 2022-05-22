import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Tobias Pitters, a physicist turned Data Scientist/Data Engineer from Stuttgart, Germany.
          I'm currently working as a freelancer, which I genuinely enjoy.
        <br />
        <br />I also love doing <b>open source</b> development, I committed to fantastic libraries
          in the Python and Rust ecosystem, such as the amazing dataframe libraries
          {' '}
          <a className="about__link" href="https://pandas.pydata.org/">
            Pandas
          </a>{' '}
          and 
          {' '}
          <a className="about__link" href="https://github.com/pola-rs/polars">
            Polars
          </a>{' '}.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Perfect is the enemy of good.“</p>
          <br />
          <i>- Voltaire</i>
        </Quote>
        <Quote>
          <p>
            “You’re unlikely to discover something new without a lot of practice on old stuff, but further, you should get a heck of a lot of fun out of working out funny relations and interesting things.”
          </p>
          <br />
          <i>- Richard Feynman</i>
        </Quote>
        <Quote>
          <p>
            “We cannot solve our problems with the same thinking we used when we created them.“
          </p>
          <br />
          <i>- Albert Einstein</i>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
