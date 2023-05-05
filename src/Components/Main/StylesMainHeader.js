import styled from "styled-components";

export const Container = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .cards_button{
        flex-direction: inline;
    }
    
    .stylesMain{
        justify-content: center;
        width: 50%;
        img {
            width: 180px;
            padding: 15px;
        }
        .NameSite {
            display:flex;
        }
    }

    @media (max-width: 376px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    text-align: center;

    img {
        width: 100%;
    }
    h3 {
        margin-top: 5px;
        padding: 3%;
    }
    }
`;
