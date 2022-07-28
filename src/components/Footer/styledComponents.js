import styled from 'styled-components'

export const Foot = styled.footer`
  width:100%;
  background-color:${({ theme })=>theme.c2};
  color:${({ theme })=>theme.c1};
  padding: 10px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`