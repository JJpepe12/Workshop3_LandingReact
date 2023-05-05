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
        <div>
        <stylesMain> 
        
            {CardsContainer.map((item,index) =>(
            <img key={`${item.image}-${index}`}>{item.image}</img>
            ))}
    
    </stylesMain>


        </div> 
    </Container>
)
}
export default MainHeader;
