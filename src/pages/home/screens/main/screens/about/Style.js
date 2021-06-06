import styled from 'styled-components';

import 'assets/fonts/font.css'

export const BackgroundGrid = styled.div`
    width: 100%;
    height: 100%;

    grid-column: 1/2;
    grid-row: 1/3;
    z-index:1;

    @media (max-width: 1600px) {
        grid-column: 1/3;
    }
`;

export const TextGrid = styled.div`
    width: 100%;
    height: 100%;

    grid-column: 2/3;
    grid-row: 1/3;
    z-index:2;

    @media (max-width: 1000px) {
        grid-column: 1/3;
        padding-top:20px;
    }

    @media (max-width: 1000px) {
        padding-top:0px;
    }
`;

export const About = styled.div`
    grid-column:"1/3";
    grid-row:"2/3";
`;

export const TextBox = styled.div`
    width: 70%;
    min-width: 400px;

    height: 90%;
    min-height: 700px;

    background-color:rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);

    padding-left:40px;

    h2 {
        font-family: frescor, sans-serif;
        font-size: 10em;
        color:#0f85e6;

        @media (max-width: 1600px) {
            font-size: 6em;
        }

        @media (max-width: 800px) {
            margin-top:30px;
        }
    }

    .content {
        width: 500px;
        font-family: OpenSans;
        font-size: 1.3em;
        text-align: justify;

        @media (max-width: 1600px) {
            width: auto;
            font-size: 1.1em;
            margin-right: 60px;
        }
    }

    @media (max-width: 1600px) {
        background-color:rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 800px) {
        min-width: auto;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`; 