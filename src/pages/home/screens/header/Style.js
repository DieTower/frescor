import styled from 'styled-components';

import 'assets/fonts/font.css';

export const HeaderDiv = styled.header`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerDiv = styled.div`
    grid-row: 1/3;
    grid-column: 1/3;
    z-index: 2;
`;

export const BarDiv = styled.div`
    grid-row: 1/3;
    grid-column: 1/2;
    background-color:#0f85e6;

    @media(max-width: 1000px) {
        background-color:transparent;
    }
`;

export const MainDiv = styled.div`
    grid-row: 1/3;
    grid-column: 2/3;

    @media(max-width: 1000px) {
        grid-column: 1/3;
    }
`;

export const MainContentDiv = styled.div`
    width: 85%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);

    font-family: "Frescor";

    .content {
        margin:80px;

        transition-property: margin;
        transition-duration: 0.3s;

        @media(max-width: 500px) {
            margin-left:40px;
        }

        @media(max-width: 400px) {
            margin-left:20px;
        }
    }

    p {
        background-color: #ffffff;
        width: 500px;
        font-size:2em;
        
        padding-top:4px;
        padding-left: 4px;

        @media(max-width: 800px) {
            width: 250px;
        }

        @media(max-width: 500px) {
            width: 150px;
            font-size:1.2em;
        }
    }

    h1 {
        min-width: 450px;
        font-size:8em;
        letter-spacing: 6px;
        color:#ffffff;
        text-shadow:-1px -5px 4px #000000;
        cursor:default;

        /*
        color:#4dbe18;
        text-shadow:-1px -5px 4px #0f85e6;
        */

        transition: text-shadow 0.2s ease-in;

        span {
            color:#0f85e6;
            text-shadow:3px 1px 2px #4dbe18;
            margin-left:10px;

            transition: text-shadow 0.2s ease-in;
        }

        &:hover {
            text-shadow:1px 5px 4px #000000;
        }

        &:hover span {
            text-shadow:-3px -1px 2px #4dbe18;
        }

        @media(max-width: 800px) {
            font-size:6em;
        }

        @media(max-width: 500px) {
            font-size:5em;
        }
    }

    @media(max-width: 1000px) {
        width: 100%;
    }
`;

export const Line = styled.div`
    width: 120px;
    height: 5px;
    background-color:#ffffff;
    box-shadow:2px 2px 1px #4dbe18;
    border-radius:1px;

    @media(max-width: 500px) {
        width: 90px;
        height: 3px;
    }
`;

export const Text = styled.div`
    width:auto;
    height: auto;
    
    margin:1px 26px;

    font-family: BungeeShade, sans-serif;
    font-size:1.5em;

    transition: font-size 0.2s ease-out;

    a {
        color:#0f85e6;
        letter-spacing: 0px;
        text-shadow:0px 0px 5px #4dbe18;

        transition: text-shadow 0.2s ease-out;
    }

    &:hover {
        font-size:1.8em;
    }

    &:hover a {
        text-shadow:0px 0px 1px #4dbe18;
    }

    @media(max-width: 800px) {
        font-size:1.3em;
    }
`;

export const TextBox = styled.div`
    font-family: OpenSans, sans-serif;
    font-weight: 400;
    color:#ffffff;
    margin-top:50px;
    width:295px;
    text-shadow:0px 0px 4px #000000;

    @media(max-width: 800px) {
        font-size:0.8em;
    }

    @media(max-width: 500px) {
        width:230px;
        font-size:0.7em;
    }
`;