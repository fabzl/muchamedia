import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//import laurel from "../img/laurels_black.svg";
//import translations from "../translations";
//import logo from "../img/logo_loader.svg";

import { colors } from "../styles/globals";

const Wrap = styled.div`
  height: 50vh;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Acerca = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  text-align: center;
  padding: 10% 20%;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1.2em;
  margin: 2rem 0 0.6em;
  letter-spacing: 130%;
  text-align: center;
  font-size: 22px;
  padding: 0 10%;
  @media (min-width: 520px) {
    font-size: 30px;
    padding: 0;
  }
  @media (min-width: 720px) {
    font-size: 32px;
  }

  &.dark {
    color: ${colors.black};
  }
`;

const Description = styled.p`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1.2em;
  margin: 2rem 0 0.6em;
  color: ${colors.white};
  letter-spacing: 130%;
  text-align: center;
  font-size: 15px;
  padding: 0 30%;
  @media (min-width: 520px) {
    font-size: 18px;
  }
  @media (min-width: 720px) {
    font-size: 22px;
  }

  &.dark {
    color: ${colors.black};
  }
`;
/* 
const Laurel = styled.div`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0;
  color: ${colors.black};
  max-width: 180px;
  min-height: 100px;
  text-align: center;
  overflow: visible;
  position: relative;
  background: url(${laurel}) no-repeat;
  background-size: cover;
  padding: 25px 30px;
  &:first-child {
    display: flex;
    align-items: center;
  }
`; */

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 430px;
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Prizes = styled.div`
  margin: 0 auto;
  display: flex;
  color: ${colors.white};
  flex: 1;
  flex-direction: row;
`;

/* const Box = styled.div`
  flex-direction: row;
  padding: 15px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    45deg,
    ${colors.orange} 0%,
    ${colors.violet} 100%
  );
  padding-bottom: 100px;
`;

 */
//const Item = ({ item }) => <Laurel>{item}</Laurel>;

const About = props => {
  const { data, language } = props;
  const {
    // about_image_big,
    about_image_small_1,
    about_image_small_2,
    about_image_small_3,
    about_image_small_4,
    text_about,
    about_us,
  //  premios,
    descripcion,
    description
  } = data;

 /*  const premiosArray = {
    es: premios.split(" // "),
    en: premios.split(" // ")
  };
 */
  return (
    <div>
      <Wrap src={props.data.about_image_big.url} />
      <Acerca>
        <H2 className="title-part line-1 font-smooth">
          {language === "es" ? text_about : about_us}
        </H2>
      </Acerca>
      <Images>
        <Image src={about_image_small_1.url} />
        <Image src={about_image_small_2.url} />
        <Image src={about_image_small_3.url} />
        <Image src={about_image_small_4.url} />
      </Images>

      <Description>{language === "es" ? descripcion : description}</Description>
      <Prizes>
        {/* <Box>
          <div>
            <H2 className="dark">
              {translations.about.prizes[props.language]}
            </H2>
            {premiosArray[props.language].map(item => (
              <div className="premio" key={item}>
                <Item item={item} />
              </div>
            ))}
          </div> 
        </Box>*/}
      </Prizes>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.pages[1].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(About);
