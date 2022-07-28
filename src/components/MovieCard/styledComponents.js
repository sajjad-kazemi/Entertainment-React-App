import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  background-color: ${({ theme }) => theme.c2};
  border-radius: 10px;
  width: auto;
  height: auto;
  margin: 15px;
  color: ${({ theme }) => theme.darkC1};
  max-width: 400px;
  min-width: 300px;
  min-height: 350px;
  &:hover div {
    opacity: 0;
  }

  @media only screen and (max-width: 376px) {
    min-height: 150px;
    min-width: 250px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
    background-position: right;
    display: flex;
    margin:15px 5px;
    & div {
      position: static;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
      align-content: space-around;
      width: 60%;
      height: 100%;
      padding-left: 4px;
      background: ${({ theme }) => theme.lightC2};
      & p {
        color: ${({ theme }) => theme.lightC1};
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
    &:hover div {
    opacity: 1;
  }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s;
`;
