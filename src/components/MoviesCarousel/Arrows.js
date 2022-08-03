import styled from 'styled-components'

const Arrow = styled.button`
  &:hover:before{
    color: ${({ theme }) => theme.c2}
  }
  &:before{
    width:20px;
    height:20px;
    color: ${({ theme }) => theme.darkC2}
  }
`
export default Arrow