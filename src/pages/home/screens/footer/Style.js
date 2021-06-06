import styled from 'styled-components';

export const Footer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;

    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);

    ul {

        list-style:none;
        font-family: OpenSans;
        font-size: 12px;
        margin-left:1px;

        li {
            border-bottom: 1px solid transparent;
        }

        li:hover {
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
        }

        li:hover a {
            color: #ffffff;
        }

        li a {
            display: inline-block;
            width: 100%;

            transition-property: all;
            transition-duration: 0.3s;
        }
    }
`;

export const Icon = styled.div`

    display: flex;
    flex-direction: row;

    a {
        transition-property: transform;
        transition-duration: 0.3s;
    }

    &:hover a {
        transform: scale(1.1);
    }
`;

export const CreatedBy = styled.div`

    font-family: OpenSans;
    font-size: 9px;

    p {
        
        margin:5px 12px;
    }
`;