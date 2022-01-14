import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import laurel from "../img/laurels_black.svg";
import translations from "../translations";

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

const Laurel = styled.img`
  
`; 

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

const PrizeWrapper= styled.div`
  margin: 0 auto;
  display: flex;
  text-align:center;
  flex-direction: column;
`;

const Prizes = styled.div`
  margin: 0 auto;
  display: block;
  color: ${colors.black};
  
`;

 const Box = styled.div`
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
`;

 
const Item = ({ item, projectName }) => 
      <Prizes> 
         <div>
            <projectNameText>{projectName}</projectNameText> 
            <Laurel src={laurel}/><prizeNameText> {item.split("/")} </prizeNameText><Laurel src={laurel}/>
         </div>  
    </Prizes>;



const About = props => {
  const { data, language, posts } = props;

  const items = posts
  
   //(posts;
  //const { link } = props.posts.params;
  //const key = items.map(element => element.slug).indexOf(link);


  const {
    // about_image_big,
    about_image_small_1,
    about_image_small_2,
    about_image_small_3,
    about_image_small_4,
    text_about,
    about_us,
    //premios,
    //awards,
    descripcion,
    description
  } = data;




  //console.dir(items[0].acf.premios.split("/"))
  //console.dir(items[0].acf.awards.split("/"))

  console.dir(items)
  const premiosArray = []
  const awardsArray = []
  const nombresArray = []
  const namesArray = []

  let i = 0 

  for(i; i < items.length ; i++ ) {

      premiosArray.push(items[i].acf.premios)
      awardsArray.push(items[i].acf.awards)
      nombresArray.push(items[i].acf.nombre_del_proyecto)
      namesArray.push(items[i].acf.project_name)
    }

   const listadePremiosArray = {
    es: premiosArray,
    en: awardsArray
  };

  
  const listadeNombresArray = {
    es: nombresArray,
    en: namesArray
  };


  console.dir(listadeNombresArray[props.language][0])
 
  return (
    <div>
      <Wrap src={props.data.about_image_big.url} />
      <Acerca>
        <H2 className="title-part line-1 font-smooth">
          {language === "es" ? text_about : about_us}
        </H2>
      </Acerca>
      <Images>
       { (about_image_small_1 === false ) ? "":<Image src={about_image_small_1.url} />}
       { (about_image_small_2 === false ) ? "":<Image src={about_image_small_2.url} />}
       { (about_image_small_3 === false ) ? "":<Image src={about_image_small_3.url} />}
       { (about_image_small_4 === false ) ? "":<Image src={about_image_small_4.url} />}
      </Images>

      <Description>{language === "es" ? descripcion : description}</Description>
      <Prizes>
        <Box>
          <div>
            <H2 className="dark">
              {translations.about.prizes[props.language]}
            </H2>
            <PrizeWrapper>
            {listadePremiosArray[props.language].map((item, i)  => (
                 (!item ) ? "":
              <div className="premio" key={i}>
                <Item item={listadePremiosArray[props.language][i]} lang={props.language} projectName={listadeNombresArray[props.language][i]}>
                </Item>
              </div>
            ))}
            </PrizeWrapper>
          </div> 
        </Box>
      </Prizes>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.pages[1].acf,
    posts: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(About);
