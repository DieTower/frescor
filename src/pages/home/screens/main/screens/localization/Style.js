import styled from 'styled-components';

export const Localization = styled.div`
    grid-column:"1/3";
    grid-row:"3/4";

    display:flex;
    align-items: center;

    .container {
        width: 100%;
        min-height: 850px;

        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 90px 1fr;
    }
`;

export const Label = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;

    background-color:rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px);

    z-index:1;

    padding-right: 5px;

    .text {
        font-family: frescor, sans-serif;
        font-weight: 700;
        font-size: 4em;
        color: #4dbe18;

        padding-right: 18px;

        cursor: default;

        transition-property: transform, opacity;
        transition-duration: 0.3s;

        @media(max-width: 1000px) {
            font-size: 2em;
            letter-spacing: 5px;
        }
    }

    @media(max-width: 1000px) {
        grid-column: 1/3;
        grid-row: 1/2;
    }
`;

export const MapContainer = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;

    z-index:2;

    transition-property: transform, opacity;
    transition-duration: 0.3s;

    display: flex;
    justify-content: center;

    .mapouter {
        position: relative;
        text-align: left;

        .gmap_canvas {
            overflow: hidden;
            background: none !important;
        }
    }

    .mapouter, .gmap_canvas, .gmap_iframe {
        width: 99%;
        height: 100%;

        @media(max-width: 1000px) {
            width: 100%;
        }
    }

    @media(max-width: 1000px) {
        grid-column: 1/3;
        grid-row: 1/3;

        margin-top: 45px;

        z-index:1;
    }
`;

