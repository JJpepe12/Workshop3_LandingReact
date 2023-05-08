import styled from "styled-components";

export const Container = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    font-family: 'Josefin Sans', sans-serif;
    padding: 0% 7%;

    .cards_button{
        display: flex;
        align-items: center;
        padding: 30px 0;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 3%;
        margin-right: -55%;
            
        button{
        border: 2px solid #000;
        padding: 10px 30px;
        color: #000;
        cursor: pointer;
        font-family: 'Alata', sans-serif;
        }

        button:hover {
        background-color: #000;
        color: #fff;
        }

    }
    
    .stylesMain{
        display: flex;
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

    .cards_button{
        padding: 5px 0;
        margin-left: -3%;
        margin-right: 3%;
        margin-top: -15%;
        }
    }
`;
