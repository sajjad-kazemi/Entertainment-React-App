import styled from 'styled-components'

export const Form = styled.form`
  justify-self:center;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width:15vw;
  border:none;
  height:30px;
  font-size:5px;
  z-index:2;
  &{
    & + button{
      transform: translateX(-100%);
      opacity:0;
    }
    &:focus + button , & + button:focus{
      transform:translateX(0);
      opacity:1;
    }
  }
`

export const Submit = styled.button`
  height:30px;
  padding:0 5px;
  overflow: hidden;
  z-index: 1;
  transition: transform .1s ease-out;
  background-color: ${({ theme }) => theme.lightColor};
  border-color: ${({ theme }) => theme.c1}
`
