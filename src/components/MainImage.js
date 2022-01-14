import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  color: ${colors.white};
  font-size: 1.6rem;
  & a:first-child:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-left: 1.5rem;
    }
  }

  & a:last-child:hover {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-right: 1.5rem;
    }
  }
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  transform: translateY(-10vh);
  max-width:80vw;
 
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Arrow = styled(Link)`
  color: ${colors.white};
  height: 100%;
  align-items: center;
  display: flex;
  width: 10vw;
  justify-content: center;
  background: transparent;
  & svg {
    transition: all 0.3s;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width:80vw;
`;

const Play = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  & i {
    width: 0.5em;
  }
`;

const MainImage = props => (
  <Wrap src={props.url}>
    <Arrow to={props.prevLink}>
      <i className="fas fa-chevron-left fa-4x" />
    </Arrow>

    <Center>
      <H1>{props.nombre_del_proyecto}</H1>
      <Play onClick={() => props.playVideo(props.videoUrl)}>
        <i className="far fa-play-circle fa-5x" />
      </Play>
    </Center>

    <Arrow to={props.nextLink}>
      <i className="fas fa-chevron-right fa-4x" />
    </Arrow>
  </Wrap>
);

export default connect(
  null,
  { playVideo }
)(MainImage);
