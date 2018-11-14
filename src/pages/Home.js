import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";

const AllWork = styled.div`
  padding: 0;
  background: linear-gradient(
    135deg,
    ${colors.orange} 0%,
    ${colors.violet} 100%
  );
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2em;
  font-size: 2rem;
  font-family: "poppins";
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  padding: 5.5rem 0 4.5rem;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;

const Home = props => (
  <div>
    <VideoHome
      video={props.dataHome.videos}
      title={
        props.language === "es"
          ? props.dataHome.intro_text_español
          : props.dataHome.intro_text_english
      }
    />
    <Grid data={props.data} language={props.language} />
    <AllWork>
      <H3>
        <LinkTo to="/work">{translations.home.link[props.language]}</LinkTo>
      </H3>
    </AllWork>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[2].acf,
    dataContact: state.data.pages[0].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
