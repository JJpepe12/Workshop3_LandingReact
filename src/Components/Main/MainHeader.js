import React from "react";
import { CardsContainer } from "./Data";
import { Container } from "./StylesMainHeader";


const MainHeader= () =>{
return (
    <Container>
        <div className="cards_button">
            <h1> OUR CREATIONS </h1>
            <button> 
            SEE ALL
            </button> <br/>
        </div>
            <stylesMain className="stylesMain"> 
                {CardsContainer.map((item,index) =>(
                <img src= {item.image} key={`${item.image}-${index}`}/>
                ))}
                {CardsContainer.map((item,index) =>(
                <h3 key={`${item.name}-${index}`}> '{item.name}'</h3>
                ))}
            </stylesMain>   
            
    </Container>
);
};
export default MainHeader;
