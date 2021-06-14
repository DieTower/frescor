import styled from 'styled-components';

import 'assets/fonts/font.css'

export const Contact = styled.div`
    grid-column:"1/3";
    grid-row:"4/5";

    .container {
        min-width: 300px;
        width: 780px;
        min-height: 750px;
        height: 58%;

        padding:15px;
        padding-left:35px;

        background-color:rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(3px);

        @media(max-width: 1000px) {
            width: 100%;
        }

        @media(max-width: 500px) {
            width: 100%;
            min-width: auto;
        }
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;

    display:flex;
    align-items: flex-end;

    p {
        font-family: frescor, sans-serif;
        font-size: 6em;
        color:#4dbe18;

        @media(max-width: 600px) {
            font-size: 4em;
        }
    }

    @media(max-width: 500px) {
        width: 95%;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;

    display:flex;
    direction: column;
    align-items: flex-start;
`;