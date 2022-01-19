import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import translations from "../translations";
import { connect } from "react-redux";
import MainImage from "../components/MainImage";
import Desc from "../components/Desc";
//import translations from "../translations";
import laurel from "../img/laurels_black.svg";

import { colors } from "../styles/globals";


const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
  letter-spacing: 130%;
  text-align: center;
  font-size: 1.2rem;
  padding: 0 10%;
  width:100%;
  @media (min-width: 520px) {
    font-size: 1.8rem;
	margin-bottom: 20px;
    padding: 0;
  }
  @media (min-width: 1424px) {
	font-size: 2.2rem;
  }

  &.dark {
    color: ${colors.black};
  }
`;

const PrizeNameText = styled.p`
    flex-direction: column;
    max-width: 40%; 
    margin:  0 auto 5% auto;
    font-size: 1.6rem;
    font-weight:900;
    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
	

`;
const PrizeWrapper = styled.div`
    flex-direction: column;
    display:flex;
    justify-content:center;
`;



const Prize= styled.div`
  display: flex;
  text-align:center;
  flex-direction: column;
  align-self:  center;
  width:100%;
`;

const Prizes = styled.div`
  margin: 25 auto;
  display: block;
  color: ${colors.black};
  flex-direction: row;
 
`;

 const Box = styled.div`

  padding: 15px 0;
  width: 100vw;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;


  background: linear-gradient(
    45deg,
    ${colors.orange} 0%,
    ${colors.violet} 100%
  );
  @media (min-width: 1200px) {
    min-height: 20vw;
  }
`;

const Item = ({ item  }) => 
      <Prize> 
         <div>
            <PrizeNameText>{item.split("/").join('\n')}</PrizeNameText>
         </div> 
         <Laurel src={laurel}/> 
    </Prize>;



const Laurel = styled.img`
  width:60%;
  position:absolute;
  text-align: center;
  left: 0; 
  right: 0; 
  top:50%;
  margin-left: auto; 
  margin-right: auto;
  transform: translateY(-50%);
  
  @media (min-width: 520px) {
  
	margin-top: 20px;

  }


  @media (min-width: 1024px) {
  }

`; 


const ShowWork = props => {
  // Filtrar a solamente los que tienen avatar_picture
  // const items = props.data.filter(item => item.acf.avatar_picture);
  const { posts, language } = props;
  const items = posts;


  
  
  

  // Chequear item
  const { link } = props.match.params;
  const key = items.map(element => element.slug).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const {
    avatar_picture: { url },
    nombre_del_proyecto,
    project_name,
    descripcion_del_proyecto,
    project_description,
    vimeourl,
    cliente,
    awards,
    premios,
    web
  } = items[key].acf;





  // const postContentData = items[key].content.rendered;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (
    <div>
      <MainImage
        nombre_del_proyecto={
          language === "es" ? nombre_del_proyecto : project_name
        }
        url={url}
        videoUrl={vimeourl}
        prevLink={prevLink}
        nextLink={nextLink}
      />

      <Desc
        title={language === "es" ? nombre_del_proyecto : project_name}
        desc={
          language === "es" ? descripcion_del_proyecto : project_description
        }
        client={cliente}
        web={web}
        language={language}
      />
        {(!awards  || !premios ) ? "": 
        <Prizes>
        <Box>
            <H2 className="dark">
              {translations.about.prizes[props.language]} 
            </H2>
            <PrizeWrapper>
                <Item item={ props.language === "es" ? premios : awards}  />
             </PrizeWrapper>
        </Box>
      </Prizes>}


    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(ShowWork);
