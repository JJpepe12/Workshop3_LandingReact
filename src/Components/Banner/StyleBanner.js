import styled from "styled-components";

export const StylesBanner = styled.section`
padding: 50px 20px;
position: relative;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: end;

  img{
    max-width: 100%;
  }

  h2 {
    padding: 30px 0 20px;
    line-height: 1.3;
    text-align: center;
  }

  p {
    padding: 0 40px;
    line-height: 1.3;
    text-align: center;
  }
`;