import styled from 'styled-components'

export const Card = styled.article`
  position:relative;
  width:300px;
  height:400px;
  margin:0;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  & p{
    opacity:0;
    transition: opacity .2s linear;
  }
  &:hover {
    & p{
      opacity:1;
    }
  }
  @media only screen and (hover:none){
    & p{
      opacity:1;
    }
  }
`

export const Poster = styled.img`
  width:100%;
  height:auto;
`
export const Title = styled.p`
  width:100%;
  text-align:center;
  position:absolute;
  bottom:0;
  background-color:${({theme})=>theme.c2};
  color:${({theme})=>theme.c1};
`