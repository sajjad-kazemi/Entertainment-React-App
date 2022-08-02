import styled from "styled-components";

export const Banner = styled.div``;

export const StyledHome = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
    border-right: ${({ theme }) => theme.c4} 2px solid;
  }
  ::-webkit-scrollbar-thumb {
    border-right: ${({ theme }) => theme.c4} 2px solid;
  }
  @media (hover: none) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const  Title = styled.h2`
  text-align:center;
  margin:15px 7px;
  user-select: none;
`
