import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeLang } from "../redux/actions";
import { colors } from "../styles/globals";

const H2 = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: ${colors.white};
  border: 1px solid ${colors.white};
  padding: 0.5rem;
  padding-top: 0.8rem;
  margin-right: 5rem;
  transition: 0.7s all;
  @media (max-width: 740px) {
    position: fixed;
    top: 2rem;
    left: 2rem;
  }
  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
  }
  &:both {
    border-top: none;
  }
`;

// () => props.changeLang()
const LanguageSelector = props => (
  <H2 onClick={() => props.changeLang()}>
    {props.language === "en" ? "es" : "en"}
  </H2>
);

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(
  mapStateToProps,
  { changeLang }
)(LanguageSelector);
