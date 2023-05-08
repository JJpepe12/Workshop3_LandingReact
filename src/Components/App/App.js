import React from "react";
import GlobalStyles from "./StyleApp";
import Banner from "../Banner/Banner";
import MainHeader  from "../Main/MainHeader";
import Footer from '../Footer/Footer'

const App = () => {
    return (
        <>
        <GlobalStyles />
        <Banner />
        <MainHeader/> 
        <Footer/>
        </>
    );
};

export default App;
