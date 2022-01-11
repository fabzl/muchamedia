import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

// import { enableScroll, disableScroll } from "../helpers";
import { stopVideo } from "../redux/actions";
import { tvOn } from "../styles/globals";

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 9998; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  /* transition: opacity 300ms ease-in-out;
  opacity: 0; */
`;

const Content = styled.div`
  display: block;
  height: 95vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${tvOn} 2s forwards;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 99999;
  color: #ddd;
  &:hover {
    opacity: 0.5;
  }
`;

class Modal extends Component {



  videoEnd = () => {
    console.log("videoEND");
  };

  render() {
    return (
      <Overlay {...this.props}>
        <Content>
          <CloseButton onClick={this.props.stopVideo}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>

          <ReactPlayer
            url={this.props.url}
            playing={true}
            autoPlay
            controls
            width="100%"
            height="95vh"
            onEnded={this.videoEnd}
          />
        </Content>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.video.url
  };
};

export default connect(
  mapStateToProps,
  { stopVideo }
)(Modal);
