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
        grid-template-columns: 150px 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const Label = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;

    z-index:1;

    padding-right: 10px;

    .text {
        font-family: frescor, sans-serif;
        font-size: 2em;
        color: #ffffff;
        text-shadow: -2px 3px 2px #000000;

        padding-right: 5px;

        writing-mode: vertical-rl;
        text-orientation: upright;

        cursor: default;

        transition-property: transform, opacity;
        transition-duration: 0.3s;

        @media(max-width: 1000px) {
            writing-mode: horizontal-tb;
            text-orientation: mixed;
        }
    }

    @media(max-width: 1000px) {
        grid-column: 1/3;
        grid-row: 1/2;
    }
`;

export const MapContainer = styled.div`
    grid-column: 2/3;
    grid-row: 1/3;

    z-index:2;

    transition-property: transform, opacity;
    transition-duration: 0.3s;

    display: flex;
    justify-content: flex-start;

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

