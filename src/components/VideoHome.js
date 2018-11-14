import React from "react";
import styled from "styled-components";
import { colors } from "../styles/globals";
import WebFont from "webfontloader";
import Parser from "html-react-parser";

const Section = styled.section`
  height: ${props => (props.contact ? 80 : 100)}vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  z-index: 20;
  pointer-events: none;
  transition: opacity 1.3s;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  color: ${colors.white};
`;

const H1 = styled.h1`
  display: inline-flex;
  z-index: 300;
  color: ${colors.white};
  letter-spacing: 130%;
  /* line-height: 2rem; */
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 3vmax;
  font-weight: 600;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  text-align: center;

  &::after,
  &::before {
    content: "";
    display: none;
    /* display: block; */
    width: 0;
    border-top: 3px solid ${colors.white};
    transition: width 0.6s 0.2s, left 0.6s 0.2s, right 0.6s 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    position: absolute;
    top: 50%;
    margin-top: -1.5rem;
    transform: translateZ(0);
    width: 7rem;
    @media (min-width: 520px) {
    }
  }

  &::before {
    left: -7rem;
  }

  &::after {
    right: -7rem;
  }
`;

WebFont.load({
  google: {
    families: ["Poppins:800", "Arial"]
  }
});

export default props => {
  let videoOverride = props.video;
  let videosArray = videoOverride.split("||");
  let randomValue = Math.floor(Math.random() * videosArray.length);
  let video = videosArray[randomValue];

  return (
    <Section {...props}>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoContainer>

      <Text>
        <H1>{Parser(props.title)}</H1>
      </Text>
    </Section>
  );
};
