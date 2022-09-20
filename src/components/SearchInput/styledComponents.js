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
  z-index:2;
  padding-left:5px;
  border-radius:100vh;
  border:none;
  outline:none;
  &:focus + button , & + button:focus{
    opacity:1;
    z-index:10;
  }
`

export const Submit = styled.button`
  height:30px;
  padding:0 5px;
  overflow: hidden;
  border-radius:0 100vh 100vh 0;
  z-index: 1;
  transform: translateX(-100%);
  transition: opacity .1s cubic-bezier(1,0,.5,1);
  opacity:0;
  background-color: ${({ theme }) => theme.lightColor};
  border-color: ${({ theme }) => theme.lightC2};
  border-style: solid;
  border-width: 2px;
  cursor:pointer;
  border-left:none;
  &:hover{
    filter:brightness(120%)
  }
`
