import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px 0;
  @media screen and (max-width: 376px) {
    padding: 40px 20;
    flex-direction: column;
  
    background-color: ${props => props.viewOption ? 'black' : 'inherit'};
  }
`;

export const Ul = styled.ul `
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: center;
  color: white;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  @media screen and (max-width: 376px) {
  //Evaluar si viewoption es true se aplica flex y si es false se aplica none
  //https://styled-components.com/docs/basics#adapting-based-on-props
    display: ${props => props.viewOption ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    height: 98vh;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3rem;
    font-weight: 300;
  }
`;

export const IconHamburger = styled.figure `
    display: none;
  @media screen and (max-width:376px){
    display: block;
    color: white;
    font-size: 1rem;
    position: absolute;
    right: 0;
  }
`;