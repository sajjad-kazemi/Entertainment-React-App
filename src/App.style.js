import { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
  body{
  background-color:${({ theme }) => theme.c1};
  color:${({ theme }) => theme.textColor};
  scroll-behavior: smooth;
  }
  ::-webkit-scrollbar{
    width:10px;
    background-color:${({ theme })=>theme.darkC3};
  }
  ::-webkit-scrollbar-thumb{
    background-color:${({ theme })=>theme.darkC2};
    border-radius:100vh;
  }
  ::-webkit-scrollbar-thumb:active{
    background-color: ${({ theme })=>theme.c2};
  }

`;
