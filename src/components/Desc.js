import React from "react";
import styled from "styled-components";
//import translations from "../translations";
import { colors } from "../styles/globals";

const Section = styled.div`
  padding: 4rem 0 2rem;
  width:100vw;
`;

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  color: ${colors.white};
  text-align: center;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;

  font-size: 3.2rem;
 
  @media (min-width: 520px) {
    font-size: 2.2rem;
    padding: 0;
  }
  @media (min-width: 1024px) {
	font-size: 4.2rem;
  }

`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
`;

const Dl = styled.dl`
  margin: 1rem 0;
  font-size: 2rem;
  font-style: italic;
  line-height: 1.6em;
  text-align: center;
`;

const WebLink = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  margin: 2rem 0 3rem;
  color: ${colors.white};
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 0.8rem;
  
  @media (max-width: 720px) {
    font-size: 1rem;
    letter-spacing: 0.5rem;
  }
  @media (max-width: 520px) {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
`;


const Dd = styled.dd`
  margin: 3rem 0 2rem;
`;

const Desc = props => (
  <Section>
    <Container>
      <H2>{props.title}</H2>
      <Description>{props.desc}</Description>
      <Dl>
        <Dd>{props.client}</Dd>

        <WebLink href={"http://" + props.web} target="_blank">
          {props.web}
        </WebLink>
      </Dl>
    </Container>
  </Section>
);

export default Desc;
