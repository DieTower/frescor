import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Flex, GridTemplate, Grid } from 'components/core/Core'

import * as S from './Style';

import Form from './screens/form/Form';

import { MainContext } from '../../Main';

const Contact = () => {

    gsap.registerPlugin(ScrollTrigger);

    const mainContext = useContext(MainContext);

    let formContainer = useRef(null);

    useEffect(() => {

        gsap.from(formContainer,
            { x: 1000,
              scrollTrigger: {
                  trigger: mainContext.contact,
                  start: "top bottom",
                  end: "center 99%",
                  scrub: true
              },
              duration: 2 });

    });

    return (
        <S.Contact 
            id="contact"
            ref={el => mainContext.contact = el}>
            <Flex
                justify="center"
                align="center">
                
                <div className="container" ref={el => formContainer = el}>
                    <GridTemplate
                        columns="1fr 1fr"
                        rows="200px auto">

                        <Grid
                            column="1/3"
                            row="1/2">
                            
                            <S.TextContainer>
                                <p>Contacte-nos</p>
                            </S.TextContainer>
                        </Grid>

                        <Grid
                            column="1/3"
                            row="2/3">
                            
                            <S.FormContainer>
                                <Form />
                            </S.FormContainer>
                        </Grid>
                    </GridTemplate>
                </div>
            </Flex>
        </S.Contact>
    );
}

export default Contact;