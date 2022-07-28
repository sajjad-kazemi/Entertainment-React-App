import { Head, Logo, Svg, UserImage } from "./styledComponents";

import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import userImage from "../../images/userImage.svg";

function Header({ setDarkMode }) {
  return (
    <Head>
      <Logo>
        <Link to="/">Movie App</Link>
      </Logo>
      <UserImage>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </Svg>
      </UserImage>
      <ThemeToggler setDarkMode={setDarkMode} />
    </Head>
  );
}

export default Header;
