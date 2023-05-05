import styled from "styled-components";

export const StylesFooter = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 720px;
  background-color: black;
  padding: 40px;
  .copyright{
    text-align: left;
    p {
      color: #7f7f7f;
    font-size: 14px;
    font-family: "Alata", sans-serif;
    margin-left: -115px;
    }
  }
  .contenedor_2 {
    padding-top: 12px
  }
  .Social_networks button img{
    width: 20px;
  }
  .Logo img {
    width: 140px;
  }
  .Link {
    display: flex;
    gap: 30px;
    margin-left: 40px;
  }
  a {
    list-style: none;
    font-size: 14px;
    gap: 30px;
    color: white;
    font-family: "Alata", sans-serif;
    cursor: pointer;
  }
  a::after {
    content: "";
    height: 2px;
    width: 0;
    background-color: white;
    display: block;
    transition: all 300ms;
    display: flex;
    margin: auto;
    margin-top: 5px;
  }

  a:hover::after {
    width: 20px;
  }

  .Social_networks {
    display: flex;
    gap: 5px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    button::after {
      content: "";
      height: 2px;
      width: 0;
      background-color: white;
      display: block;
      transition: all 300ms;
      display: flex;
      margin: auto;
      margin-top: 5px;
    }

    button:hover::after {
      width: 20px;
    }
  }
  @media (max-width: 375px) {
    gap: 5px;
    p {
      padding-left: 120px;
    }
    .Logo img {
      display: flex;
      width: 200px;
    }
    .Link {
      display: inline-block;
      width: 60%;
      margin-top: 20px;
      line-height: 30px;
      text-align: center;
    }
    .Social_networks {
      margin-left: 60px;
      padding-top: 10px;
      gap: 2px;
    }
    .contenedor_2 {
      column-count: 1;
    }
  }
`;
