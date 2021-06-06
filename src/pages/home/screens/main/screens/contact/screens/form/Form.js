import { useRef } from "react";

import emailjs from 'emailjs-com';

import { Flex } from 'components/core/Core';

import * as S from './Style';

const Form = () => {

    let form = useRef(null);

    const sendEmail = data => {
        
        data.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_m7dnjkf', data.target, 'user_x8Fvfo8thczKCbGP9cNki')
        .then((result) => {
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            alert(error.message);
        });

        form.reset();
    }

    return (
        <S.Form>
            <form onSubmit={sendEmail} ref={el => form = el}>
                <div className="inputBlock">
                    <Flex direction="column">
                        <label htmlFor="email">De</label>
                        <input 
                            id="email"
                            type="text"
                            placeholder="Email"
                            name="email"
                            required />
                    </Flex>
                </div>

                <div className="inputBlock">
                    <Flex direction="column">
                        <label>Para</label>
                        <p>frescor.moscavide@gmail.com</p>
                    </Flex>
                </div>

                <div className="inputBlock">
                    <Flex direction="column">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            required />
                    </Flex>
                </div>

                <button><span>Enviar</span></button>
            </form>
        </S.Form>
    );
}

export default Form;