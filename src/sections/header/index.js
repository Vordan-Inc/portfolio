import React from 'react'
import { MainMenu, LogoBox } from "./styled"
import VordanLogo from "../../assets/vordan-logo.png"
const Header = () => {
  const MENU_LINKS = [
    {
      name: "Home",
      icon: "",
      link: "",
    },
    {
      name: "about us",
      icon: "",
      link: "",
    },
    {
      name: "Services",
      icon: "",
      link: "",
    },
    {
      name: "",
      icon: "",
      link: "",
    },
    {
      name: "Team",
      icon: "",
      link: "",
    }
  ]


  return (
    <MainMenu>
      <LogoBox>
          <img src={VordanLogo} />
          <span>Vordan</span>
      </LogoBox>
    </MainMenu>
  )
}

export default Header
