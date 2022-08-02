import styled from 'styled-components'

export const  Movies = styled.section`
  padding:30px;
  width:100%;
  height: auto;
  @media only screen and (max-width:925px){
  }
`
export const Loading = styled.h1`
  text-align:center;
  animation: loading 1s infinite;
  @keyframes loading {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity:0;
    }
  }
`