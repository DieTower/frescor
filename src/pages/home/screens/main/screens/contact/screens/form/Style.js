import styled from 'styled-components';

import 'assets/fonts/font.css'

export const Form = styled.div`
    
    width: 100%;

    form {

        width: 100%;
        
        .inputBlock {
            
            font-family: OpenSans, sans-serif;

            label {
                font-size: 12px;
                margin-left: 4px;
                margin-bottom:2px;

                color:#ffffff;
                letter-spacing: 1px;
            }

            textarea {
                resize: none;
                height: 300px;

                @media(max-width: 600px) {
                    height: 200px;
                }
            }

            input, textarea {
                border:none;
            }

            input:focus, textarea:focus {
                outline: none;
                background-color:rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(2px);
            }

            input, textarea, p {
                margin-bottom:10px;
                padding:7px 8px;
                background-color:rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(3px);
                
                font-family: OpenSans;
                font-size: 16px;

                width: 70%;
                min-width: 400px;
                min-height: 30px;

                border-radius: 5px;

                transition-property: "background", "backdrop-filter";
                transition-duration: 0.3s;
            }

            input {
                width: 60%;
                min-width: 400px;
            }

            p {
                display: flex;
                flex-direction: row;
                align-items: center;

                width: 100px;
                min-width: 280px;

                background-color:rgba(255, 255, 255, 0);
                backdrop-filter: blur(1px);

                font-weight: 700;
                color:#4dbe18;
            }
        }

        button {
            background-color:#0f85e6;
            box-shadow: 3px 3px 1px #4dbe18;

            border:none;
            border-radius: 50px;

            margin-top: 3px;
            padding:8px 20px;

            font-size: 16px;

            cursor:pointer;

            transition-property: 'text-shadow', 'transform';
            transition-duration: 0.3s;

            span {
                display: inline-block;
                transform: translateY(-1px);
                color:#ffffff;

                text-shadow: 2px 1px 1px #4dbe18;

                transition-property: 'text-shadow', 'transform';
                transition-duration: 0.3s;
            }

            &:hover {
                box-shadow: 2px 2px 1px #4dbe18;
            }

            &:hover span {
                transform: translateY(0px);
                text-shadow: 1px 0px 1px #4dbe18;
            }

            &:active {
                background-color: #4dbe18;
            }
        }
    }
`;