import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "../img/logo_footer.svg";
import translations from "../translations";
import { colors } from "../styles/globals";
import Social from "./Social";

// import { Link, NavLink } from "react-router-dom";

const Logo = styled.img`
  width: 68%;
  @media (min-width: 500px) {
    min-width: 15rem;
    width: 50%;
  }
  margin: 0 auto;
  display: flex;
  max-width: 30rem;
`;

const Wrap = styled.footer`
  z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 15rem;
  display: block;
  padding-bottom: 2rem;

  @media (max-width: 740px) {
    padding-bottom: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

const BackToTop = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 740px) {
    display: none;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  @media (max-width: 740px) {
    flex-direction: column;
    text-align: left;
  }
`;

const LinkTo = styled.a`
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
  padding-right: 1rem;
  font-size: 0.9rem;
  letter-spacing: 130%;
  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }

  @media (max-width: 740px) {
    width: 100%;
    display: block;
    margin-bottom: 1.4rem;
  }
`;

const ToTop = styled.a`
  color: ${colors.white};
  font-size: 1rem;
  display: inline-block;
  overflow: hidden;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
  margin: 2rem 0;
  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }
`;

export const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const Footer = props => (
  <Wrap>
    <Router>
      <Route to="/">
        <Logo src={logo} />
      </Route>
    </Router>
    <Content>
      <Social />
      <General>
        <Links>
          <LinkTo
            href={
              "mailto:" +
              props.dataContact.mail_de_contacto +
              "?subject=Contacto%20desde%20" +
              props.dataContact.mail_de_contacto
            }
          >
            <i className="far fa-envelope fa-2x" />
            {props.dataContact.mail_de_contacto}
          </LinkTo>
{/*           <LinkTo href={"tel:" + props.dataContact.telefono_de_contacto}>
            <i className="fas fa-mobile-alt fa-2x" />
            {props.dataContact.telefono_de_contacto}
          </LinkTo> */}
        </Links>
      </General>
      <BackToTop>
        <ToTop onClick={() => smoothScroll()}>
          <span>
            <i className="fas fa-angle-up fa-4x" />
          </span>
          {translations.footer.top[props.language]}
        </ToTop>
      </BackToTop>
    </Content>
  </Wrap>
);

const mapStateToProps = state => {
  return {
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Footer);
