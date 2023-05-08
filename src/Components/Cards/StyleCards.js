import styled from "styled-components";

export const StylesCard = styled.article`
  cursor: pointer;
  display: inline-block;
  color: black;
  :active {
    cursor: pointer;
  }
  :hover {
    opacity: 0.7;
  }
  figure {
    padding-left: 40px;

    img {
      width: 250px;
      cursor: pointer;
    }
  }
  .mobile {
    display: none;
  }
  .cardname {
    position: relative;
    top: -120px;
    left: 35%;
    width: 40%;
    h3 {
      display: flex;
      color: white;
      font-family: "Alata", sans-serif;
      font-weight: lighter;
      font-size: 25px;
      :hover {
        color: black;
      }
    }
  }

  @media (max-width: 375px) {
    .window1440 {
      display: none;
    }
    .mobile {
      display: inline-block;
      margin-top: 20px;
      margin-left: -50px;
    }
    .image375 {
      display: inline-block;
      img {
        width: 330px;
      }
    }
    .cardnameMobile {
      position: relative;
      top: -90px;
      left: 40px;
      width: 35%;
      h3 {
        display: flex;
      color: white;
      font-family: "Alata", sans-serif;
      font-weight: lighter;
      font-size: 22px;
      }
    }
  }
`;
