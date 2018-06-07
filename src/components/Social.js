import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../styles/globals";

class Social extends Component {
  state = {
    display: "none"
  };

  isInTheHeader = () => {
    if (this.props.header) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const Social = styled.div`
      flex: 1;
      justify-content: space-between;
      align-items: center;
      display: ${this.isInTheHeader() ? "none" : "flex"};

      @media (max-width: 740px) {
        display: ${this.isInTheHeader() ? "flex" : "none"};
        width: 40%;
      }
    `;

    const SocialLink = styled.a`
      text-decoration: none;
      color: ${colors.white};
      transition: 1s all;

      &:hover {
        color: ${colors.violet};
      }
    `;

    return (
      <Social>
        <SocialLink target="_blank" href="https://web.facebook.com/muchamedia">
          <i className="fab fa-facebook-f fa-2x" />
        </SocialLink>

        <SocialLink target="_blank" href="https://www.instagram.com/muchamedia">
          <i className="fab fa-instagram fa-2x" />
        </SocialLink>

        <SocialLink
          target="_blank"
          href="https://www.linkedin.com/company/mucha-media/"
        >
          <i className="fab fa-linkedin-in fa-2x" />
        </SocialLink>

        <SocialLink
          target="_blank"
          href="https://vimeo.com/channels/muchamedia"
        >
          <i className="fab fa-vimeo-v fa-2x" />
        </SocialLink>
      </Social>
    );
  }
}

export default Social;
