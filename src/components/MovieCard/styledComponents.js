import styled from "styled-components";

export const Card = styled.a`
  position: relative;
  cursor: pointer;
  background-color: ${({ theme }) => theme.c2};
  border-radius: 10px;
  width: ${(props) => props.width};
  height: auto;
  margin: 15px;
  color: ${({ theme }) => theme.darkC1};
  max-width: 400px;
  min-width: 300px;
  min-height: 350px;
  overflow: hidden;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(103%);
    div {
      color: transparent;
      & * {
        background: none;
      }
    }
  }
  & p:first-child {
    order: 1;
  }

  @media only screen and (max-width: 480px) {
    text-decoration: none;
    min-height: 150px;
    max-width: 250px;
    background-color: ${({ theme }) => theme.lightC2};
    background-repeat: no-repeat;
    background-image: url(${(props) => (props.notFound && props.notFoundImage) || (props.bgImage)});
    background-size: ${(props) => (props.notFound && "30%") || "contain"};
    background-position: right;
    display: flex;
    flex-shrink: 1;
    margin: 15px 5px;
    & > div {
      position: static;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;
      align-content: space-around;
      width: 65%;
      height: 100%;
      background: ${({ theme }) => theme.lightC2};
      & p {
        color: ${({ theme }) => theme.lightC1};
        word-break: break-all;
        background: none;
        font-weight: 700;
        height: 30%;
        width: 100%;
        text-align: center;
        font-size: clamp(5px, 10px, 20px);
      }
    }
    & img {
      display: none;
    }
  }
`;

export const Poster = styled.img`
  width: auto;
  height: ${(props) => (props.notFound && "auto") || "100%"};
  border-radius: 10px;
  max-width: 300px;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  & p {
    width: 100%;
    text-align: center;
    display: block;
    background: ${({ theme }) => theme.c2};
    padding-top: 5px;
    padding-bottom: 5px;
  }
  & div {
    position: absolute;
    transform: translate(-10px, 10px);
    border-radius: 10px;
    padding: 2px 4px;
    top: 0;
    right: 0;
    width: min-content;
    color: ${({ theme }) => theme.c1};
    background: ${({ theme }) => theme.c2};
  }
  @media only screen and (max-width: 480px) {
    & div{
      top:100%;
      transform:translate(-10px,calc(-110%));
    }
  }
`;
