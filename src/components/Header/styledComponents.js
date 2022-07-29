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
  position:sticky;
  top:0;
  z-index:99;
`;

export const Logo = styled.div`
  & a {
    color: ${({ theme }) => theme.c1};
    text-decoration: none;
    font-weight: 900;
  }
`;

export const UserImage = styled.div`
  color: ${({ theme }) => theme.c1};
  & svg {
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    margin: 2px ${({ theme }) => theme.globalSize * 2}px;
    right: 0;
    width: 40px;
    height: 40px;
    @media (max-width: 480px) {
      margin-right:30px;
    }
  }
`;
export const Svg = styled.svg`
  color:${({ theme })=>theme.lightColor}
` 
