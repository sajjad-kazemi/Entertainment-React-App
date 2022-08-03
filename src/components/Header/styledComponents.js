import image from "../../images/film.svg";
import styled from "styled-components";

export const Head = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.c2};
  width: 100%;
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  word-wrap: normal;
  & a {
    min-width: 20vw;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  & a p {
    margin-left: 10px;
    color: ${({ theme }) => theme.c1};
    font-weight: 900;
  }
  @media only screen and (max-width: 480px) {
    & a {
      width: min-content;
    }
    & a p {
      display: none;
    }
  }
`;

export const Svg = styled.svg`
  display: none;
  color: ${({ theme }) => theme.lightC1};
  @media only screen and (max-width: 480px) {
    display: initial;
    width: 10vw;
    height: auto;
  }
`;
