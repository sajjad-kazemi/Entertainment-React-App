import styled from "styled-components";

export const Details = styled.section`
  width:100%;
  padding:10px;
  margin:10px 0;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  @media only screen and (max-width:1024px){
    flex-direction: column-reverse;
  }
`
export const Info = styled.div`
  width:auto;
  display:flex;
  flex-direction: column;
  align-items:center;
`

export const Title = styled.h1`
  width:100%;
  margin-bottom: 20px;
  font-size: ${({ theme })=> theme.fontSize * 2.5}px;
  font-weight: 400;
  @media only screen and (max-width:1024px){
    font-size:${({ theme })=> theme.fontSize*2}px;
    text-align:center;
  }
`

export const Ratings = styled.div`
  width:100%;
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  color:${({ theme }) => theme.c2};
  & p{
    margin-left:22px;
    font-size: ${({ theme }) => theme.fontSize }px;
    flex-shrink:1;
    &:first-child{
      margin-left: 0;
    }
  }
  @media only screen and (max-width:1024px){
    justify-content: space-around;
    & p{
      margin: 10px auto;
    }
  }
`

export const Plot = styled.p`
  align-self:flex-start;
  word-break: normal;
  text-align:justify;
  width:auto;
  max-width:calc(100% - 20px);
  margin:15px 0 10px 0;
  font-weight: 100;
  @media only screen and (max-width:1024px){
    max-width:100%;
    margin:15px 15px;
  }
`

export const MiniInfo = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  @media only screen and (max-width:1024px){
    overflow:hidden;
    word-wrap:break-word;
  }
`

export const MiniInfoDetail = styled.div`
  width:100%;
  display:flex;
  justify-content: flex-start;
  margin-top:20px;
  & p{
    &:first-child{
      color:${({ theme }) => theme.lightC2};
    }
    &:last-child{
      color:${({ theme }) => theme.darkC3};
      margin-left:30px;
    }
  }
  @media only screen and (max-width:1024px){
    margin-left:15px;
    word-break: keep-all;
  }
  & p{
      &:last-child{
      margin-left:10px;
    }
    }
`

export const Poster = styled.img`
  aspect-ratio:auto;
  margin:0 10px;
  width:300px;
  height:auto;
  align-self:flex-start;
  @media only screen and (max-width:1024px){
    margin:10px auto;
  }
`