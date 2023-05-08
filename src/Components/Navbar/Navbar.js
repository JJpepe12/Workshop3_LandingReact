import React from 'react';
import logo from '../../assets/icons/logo.svg';
import {StylesNav, IconHamburguer} from './StyleNavbar';
import HamburguerNav from '../../assets/icons/icon-hamburger.svg';
import HamburguerCancel from '../../assets/icons/icon-close.svg';
import MenuOptions from './MenuOptions';

const Nabvar = () => {
    const [viewOption, setViewOption] = React.useState(false);
    const navList = [
        {
            name: "About",
            url: ""
        },
        {
            name: "Careers",
            url: ""
        },
        {
            name: "Events",
            url: ""
        },
        {
            name: "Products",
            url: ""
        },
        {
            name: "Support",
            url: ""
        }
    ]
const handleClick = () =>{
    setViewOption(!viewOption);
};

return (
    <StylesNav viewOption={viewOption}>
        <div>
            <img src={logo} alt="logo"  />
        </div>
        <IconHamburguer onClick={handleClick}>
            <img src= {viewOption ? HamburguerCancel : HamburguerNav} alt="" />
        </IconHamburguer>
        <MenuOptions navList={navList} viewOption={viewOption} />
    </StylesNav>
    );
}
export default Nabvar;