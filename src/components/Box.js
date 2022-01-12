import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { playVideo } from "../redux/actions";
import { Link } from "react-router-dom";
import { colors } from "../styles/globals";

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;

  &:hover {
    > a > div {
      opacity: 1;
      h4 {
        opacity: 1;
        transform: translateX(0);
      }
      h3 {
        transform: translateX(0);
      }
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2remm;
  background: rgba(68, 48, 79, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  user-select: none;
  opacity: 0;
  color: ${colors.white};

  h4 {
    margin: 0 0 1rem;
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: uppercase;
    font-style: italic;
    opacity: 0;
    transform: translateX(-20rem);
  }

  h3 {
    font-size: 4.2rem;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    color: ${colors.red};
    padding: 0.33rem 1rem 0.5rem;
    margin: 0;
    line-height: 1em;
    transform: translateX(20rem);
  }

  h3,
  h4 {
    transition: transform 0.8s, opacity 1.2s;
    transition-timing-function: cubic-bezier(0.1, 0.1, 0.2, 1), ease;
  }
`;

const Middle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: none;
  margin-top: -3em;
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  height: 100vh;
`;

const Category = styled.p`
  color: ${colors.white};
  position: absolute;
  left: 0;
  top: 0;
  background: ${colors.black};
  padding:0 10px;
  text-transform:uppercase;
  font-size: 1.3rem;
  font-weight: 700;
`;

class Box extends Component {
  handleLink = e => {
    if (!this.props.link) {
      e.preventDefault();
      this.props.playVideo(this.props.videoUrl);
    }
  };

  render() {
    return (
      <Wrap src={this.props.image}>
        <Category>{this.props.category} </Category>
        <LinkTo
          to={this.props.link ? `/work/${this.props.link}` : "/"}
          onClick={this.handleLink}
        >
          <Content>
            <Middle>
              <h4>{this.props.client}</h4>
              <h3>{this.props.title}</h3>
            </Middle>
          </Content>
        </LinkTo>
      </Wrap>
    );
  }
}

export default connect(
  null,
  { playVideo }
)(Box);
