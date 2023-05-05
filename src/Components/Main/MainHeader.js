import React from "react";
import styled from "styled-components";
import { CardsContainer } from "./Data";

const Container = styled.div`
display: flex;
justify-content: space-between;  
`

const MainHeader= () =>{
return (
    <Container>
        <h1> OUR CREATIONS </h1>
        <button> 
        SEE ALL
        </button> 
        
        <stylesMain> 
        
            {CardsContainer.map((item,index) =>(
            <img src= {item.image} key={`${item.image}-${index}`}/>
            ))}
    
    </stylesMain>


         
    </Container>
)
}
export default MainHeader;
