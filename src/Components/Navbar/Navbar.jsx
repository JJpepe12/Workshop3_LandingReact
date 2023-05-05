import React from 'react';
import logo from '../../assets/icons/logo.svg'; 
import {StylesNav} from './StyleNavbar';

const Nabvar = () => {
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
  return (
   <StylesNav>
    <figure>
        <img src={logo} alt=""  />
    </figure>
    <ul>
    {navList.map((item, index) => (
        <li key= {`${item.name}-${index}`}>{item.name}</li>
    ))}
    </ul>
   </StylesNav>
  );
}
export default Nabvar;