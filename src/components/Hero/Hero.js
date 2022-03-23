import React from 'react';
import Typical from "react-typical";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm <span className="highlighted-text">Patricio Drice</span><br/>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I have an array of skills from Web Development, Digital Marketing, Digital Design and E-commerce. This page was create with React.js
        <h1>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Front-End React Developer 💻",
                                1000,
                                "Facebook Marketer 💰",
                                1000,
                                "SEO Knowledge Implementor 😎",
                                1000,
                                "Ecommerce Knowledge Entrepreneur 📚",
                                1000,
                                "Digital Art Designer ✨",
                                1000,
                                "Ethusiatic Developer 💎",
                                1000,
                            ]}
                        />
                        </h1>
        </SectionText>
        
        <a href="#projects"><Button onClick={props.handleClick}>Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;