import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: "1fr 1fr";
    grid-template-rows: repeat(4, minmax(900px, 100vh));

    @media(max-width: 1000px) {
        grid-template-rows: repeat(4, minmax(830px, 80vh));
    }
`;