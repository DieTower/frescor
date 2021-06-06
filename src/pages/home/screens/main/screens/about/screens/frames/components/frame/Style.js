import styled from 'styled-components';

export const Frame = styled.div`
    grid-column: ${props => props.column};
    grid-row: ${props => props.row};

    transform:${props => props.transform};

    position: relative;
    overflow: hidden;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    background-size: ${props => props.size};

    transition-property: transform, background;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;

    .glass {
        width: 100%;
        height: 100%;
        background-color:rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(3px);

        transition-property: background-color, backdrop-filter;
        transition-duration: 0.3s;

        @media (min-width: 1600px) {
            &:hover {
                background-color:rgba(255, 255, 255, 0);
                backdrop-filter: blur(0px);
            }

            backdrop-filter: blur(1px);
        }
    }

    @media (min-width: 1600px) {
        &:hover {
            transform:scale(1.1);
            background-position: ${props => props.hoverPosition};
        }
    }

    @media (max-width: 800px) {
        background-position: center;
        background-size: cover;
    }
`;