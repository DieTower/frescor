import styled from 'styled-components';

import 'assets/fonts/font.css'

import aeg from './assets/images/brands/aeg.png'
import balay from './assets/images/brands/balay.png'
import bosch from './assets/images/brands/bosch.png'
import lg from './assets/images/brands/lg.png'
import siemens from './assets/images/brands/siemens.png'
import whirlpool from './assets/images/brands/whirlpool.png'

export const Brands = styled.div`
    grid-column:"1/3";
    grid-row:"1/2";
`;

export const Text = styled.div`
    font-family: Frescor, sans-serif;
    font-size: 15em;
    letter-spacing: 4px;
    color:#ffffff;
    text-shadow:-5px -3px 2px #4dbe18;
    cursor:default;

    display:flex;
    flex-direction: column;

    transition-property: font-size;
    transition-duration: 0.3s;

    span {
        font-size: 24px;
        margin-left:4px;
        text-shadow:-3px -1px 2px #4dbe18;

        @media(max-width: 500px) {
            font-size: 16px;
        }

        @media(max-width: 400px) {
            font-size: 12px;
        }
    }

    @media(max-width: 1400px) {
        font-size: 10em;
    }

    @media(max-width: 500px) {
        font-size: 6em;
    }

    @media(max-width: 400px) {
        font-size: 4em;
    }
`;

export const Image = styled.div`
    position:absolute;

    background-position: cover;
    background-size: cover;

    opacity: 0;

    z-index: -1;

    :nth-child(1) {
        width: 200px;
        height: 140px;

        background-image: url(${aeg});

        top:110px;
        left:180px;
        transform: translateY(-200px);

        @media(max-width: 1400px) {
            width: 160px;
            height: 110px;
        }

        @media(max-width: 500px) {
            top:90px;
            left:80px;
        }

        @media(max-width: 400px) {
            left:50px;
        }
    }

    :nth-child(2) {
        width: 270px;
        height: 91px;

        background-image: url(${balay});
        
        bottom:90px;
        left:-150px;
        transform: translateY(200px);

        @media(max-width: 1400px) {
            width: 180px;
            height: 61px;

            bottom:200px;
            left:-80px;
        }

        @media(max-width: 400px) {
            width: 133px;
            height: 45px;

            bottom:260px;
            left:-60px;
        }
    }

    :nth-child(3) {
        width: 200px;
        height: 100px;

        background-image: url(${bosch});

        right:-90px;
        bottom:250px;
        transform: translateY(200px);

        @media(max-width: 1400px) {
            width: 110px;
            height: 50px;

            right:-30px;
            bottom:220px;
        }
    }

    :nth-child(4) {
        width: 500px;
        height: 100px;

        background-image: url(${siemens});

        bottom:30px;
        right:-280px;
        transform: translateY(200px);

        @media(max-width: 1400px) {
            width: 200px;
            height: 40px;

            bottom:100px;
            right:40px;
        }

        @media(max-width: 400px) {
            width: 160px;
            height: 30px;

            bottom:140px;
            right:40px;
        }
    }

    :nth-child(5) {
        width: 200px;
        height: 150px;

        background-image: url(${lg});

        top:40px;
        right: -160px;
        transform: translateY(-200px);

        @media(max-width: 1400px) {
            width: 100px;
            height: 72px;

            top: 200px;
            right: -30px;
        }

        @media(max-width: 500px) {
            top: 230px;
            right: -20px;
        }

        @media(max-width: 400px) {
            top: 270px;
            right: -20px;
        }
    }

    :nth-child(6) {
        width: 300px;
        height: 100px;

        background-image: url(${whirlpool});

        right:760px;
        transform: translateY(-200px);

        @media(max-width: 1600px) {
            width: 200px;
            height: 67px;
            right:660px;
        }

        @media(max-width: 1400px) {
            width: 90px;
            height: 30px;

            top:280px;
            right:auto;
            left:-40px;
        }

        @media(max-width: 400px) {
            top:260px;
        }
    }
`;