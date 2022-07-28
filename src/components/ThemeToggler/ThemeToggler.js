import darkIcon from "../../images/moon.svg";
import lightIcon from "../../images/sun.svg";
import styled from "styled-components";

const Slider = styled.span`
    width: 26px;
    height: 100%;
    position: absolute;
    border:none;
    margin:0;
    background-color: ${({ theme }) => theme.c2};
    border:none;
    left:50%;
    right:0;
    transition: all .2s ease-in-out , transform .4s ease-in-out; 
    transform-origin: left;
`

const ModeIcon = styled.img``;

const Toggle = styled.input`
  display: none;
  &:checked+span{
    transform:rotateY(180deg)
  }
`;
const Label = styled.label`
  position:relative;
  width: 50px;
  height: 50%;
  background-color: ${({ theme }) => theme.c1};
  transform: translateX(-50%);
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding:0;
  cursor: pointer;
  & , & * {
    user-select: none;
  }
`;
const ThemeToggler = ({ setDarkMode }) => {
  return (
    <Label htmlFor="themeToggle">
      <ModeIcon className="light" src={lightIcon} alt="light" />
      <ModeIcon className="dark" src={darkIcon} alt="dark" />
      <Toggle
        id="themeToggle"
        type="checkbox"
        onInput={() => setDarkMode((state) => !state)}
        />
        <Slider/>
    </Label>
  );
};
export default ThemeToggler;
