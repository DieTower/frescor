import styled from 'styled-components';

export const Frames = styled.div`
    width: ${props => props.w};
    height: ${props => props.h};

    @media (max-width: 1000px) {
        width: 100%;
    }
`;