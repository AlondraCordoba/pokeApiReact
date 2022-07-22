import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Button from "@mui/material/Button";
import { useTranslation } from 'react-i18next';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Number } from "../../context/contextMessage";
import logo from "../../../assets/img/pokemonLogo.png";
import "react-pro-sidebar/dist/css/styles.css";
import './Sidebar.css';

const Sidebar = () => {
  const total = Number();
  const { t, i18n } = useTranslation(['translate']);
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  return (
    <>
      <div className="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">              
            <p style={{padding: '0px 0px 3% 4%'}}>{ !menuCollapse && (
              <>
              <img src={logo} alt="Pokemon" width="150px"></img>
              </>
            )}</p>
          </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="">
              <MenuItem onClick={(e) => window.location.href = '/'} icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pikachu_Barnstar.png/640px-Pikachu_Barnstar.png" width={25} height={25}/>}>{t("Pokemon")}</MenuItem>
              <MenuItem onClick={(e) => window.location.href = '/191286'} icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Users_icon.svg/640px-Users_icon.svg.png" width={25} height={25}/>}>{t("Acerca de")}</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="center-a" style={{padding: '4% 15% 10% 15%'}}>
            {
              !menuCollapse && (
                <>
                  {t("Wendy Cordoba")}<br/>
                  {t("Poke Api")}<br/>
                  <Button onClick={(e) => i18n.changeLanguage('es')}>ES</Button>
                  <Button onClick={(e) => i18n.changeLanguage('en')}>EN</Button>
                </>
              )
            }
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
