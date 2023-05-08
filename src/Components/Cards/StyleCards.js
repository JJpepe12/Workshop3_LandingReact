import styled from "styled-components";

export const StylesCard = styled.article`
  cursor: pointer;
  display: inline-block;
  color: black;
  :active {
    filter: grayscale(100%);
  }
  :hover {
    opacity: 0.7;
  }
  figure {
    padding-left: 40px;

    img {
      width: 250px;
    }
  }
  .cardname {
    position: relative;
    top: -115px;
    left: 25%;
    width: 45%;

    h3 {
      display: flex;
      color: white;
      font-family: "Alata", sans-serif;
      font-weight: lighter;
      font-size: 1.6rem;
      :active {
        color: black;
        -webkit-text-stroke: 0.1px white;
      }
    }
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
