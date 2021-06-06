import styled from 'styled-components';

export const FlexDev = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${props => props.bgColor};

    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap};
`;