import styled from "styled-components";

export const Card = styled.article`
  cursor:pointer;
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
  overflow:hidden;
  transition:transform .2s linear;
  &:hover{
    transform:scale(103%);
    div {
      color:transparent;
      & p{
        background:none;
      }
    }
  } 
  & p:first-child{
        order:1;
      }

  @media only screen and (max-width: 480px) {
    min-height: 150px;
    max-width: 250px;
    background-color:${({ theme }) => theme.lightC2};
    background-repeat: no-repeat;
    background-image: url(${(props) => props.bgImage});
    background-size: contain;
    background-position: right;
    display: flex;
    flex-shrink: 1;
    margin:15px 5px;
    & div {
      position: static;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
      align-content: space-around;
      width: 65%;
      height: 100%;
      background: ${({ theme }) => theme.lightC2};
      & p {
        color: ${({ theme }) => theme.lightC1};
        word-break:break-all;
        background:none;
        font-weight: 700;
        height: 30%;
        width: 100%;
        text-align: center;
        font-size: clamp(5px, 10px, 20px);
      }
      & p:last-child{
        order:2;
      }
      & p:first-child{
        order:1;
      }
    }
    & img {
      display: none;
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
  display:flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-start;
  & p{
    width:100%;
    text-align:center;
    display:block;
    background:${({ theme })=> theme.c2};
    padding-top:5px;
    padding-bottom: 5px;
  }
`;
