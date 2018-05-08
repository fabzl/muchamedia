import styled from "styled-components";
import { keyframes } from "styled-components";

export const colors = {
  black: "#1e1814",
  gray: "#282828",
  white: "#f1f1f2",
  violet: "#d73875",
  orange: "#cd4952"
};

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const rotate360 = keyframes`
  from {
    transform: (0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const colorsBGanimation = keyframes`
  0%   {background: ${colors.white}}
  25%  {background: ${colors.violet}}
  50%  {background: ${colors.orange}}
  100% {background: ${colors.white}}
`;

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const tvOn = keyframes`
  0% {
    opacity: 0;
    height: 70%; 
    width: 100%;
  }
  80% {
    opacity: 0;
    height: 70%; 
    width: 100%;
  }
  100% {
    opacity: 1;
    height: 90%; 
    width: 100%;
  }
 
`;

export const slideOut = keyframes`
  0% {
    opacity: 1;
    transform:translateY(0);
  }
  99% {
    opacity: 0;
    transform:translateY(0);

  }
  100% {
    opacity: 0;
    transform:translateY(-100%);
  }
`;

export const hide = keyframes`
  from {
    display:flex;
  }
  to {
    opacity: 0.3;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const FadeIn = styled.div`
  /* display: inline-block; */
  animation: ${fadeIn} 0.8s forwards;
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const FadeOut = styled.div`
  /* display: inline-block; */
  animation: ${fadeIn} 0.8s forwards;
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.2); }
  75% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

export const growOld = keyframes`
  0% {    
          transform: scale(0.5);
          opacity: 0;
   }
  20% {
    opacity: 1;
  }
  100% { 
          transform: scale(1.4);
          opacity: 1;
     }
`;
