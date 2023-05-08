import React from 'react';
import Nabvar from '../Navbar/Navbar';
import {StylesHeader} from './StylesHeader';
import HeaderText from '../HeaderInmersive/HeaderText';




const Header = () => {
  return (
    <StylesHeader>
        <Nabvar/>
        <HeaderText/>
    </StylesHeader>
  )
}

export default Header;