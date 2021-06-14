import { useContext, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GridTemplate, Grid, Flex, Box, Text } from 'components/core/Core'

import * as S from './Style';

import { HomeContext } from '../../Home'

const Footer = () => {

    gsap.registerPlugin(ScrollTrigger);

    const homeContext = useContext(HomeContext);

    useEffect(() => {

        gsap.from(homeContext.footer,
            { opacity: 0,
              scrollTrigger: {
                  trigger: homeContext.footer,
                  toogleActions: "restart pause reverse pause",
                  start: "top bottom",
                  end: "bottom 99%",
                  scrub: true
              },
              duration: 2 });

    });

    return (
        <S.Footer ref={el => homeContext.footer = el}>
            <GridTemplate
                columns="repeat(3, 1fr)"
                rows="repeat(3, 1fr)">
                
                <Grid
                    column="1/2"
                    row="1/4">

                    <Flex
                        direction="column"
                        justify="center"
                        align="center">
                        
                        <Box
                            w="auto"
                            h="100%"
                            marginTop="30px">

                            <Flex
                                direction="column"
                                align="flex-start">
                                
                                <Text
                                    text="Redes"
                                    family="OpenSans"
                                    weight="700"
                                    size="1.3em"
                                    color="#ffffff"
                                    shadow="3px 1px 2px #0f85e6" />

                                <S.Icon>
                                    <a href="https://www.facebook.com/Frescor-Lda-171125636398004" target="_blank" rel="noreferrer">
                                        <svg
                                            enableBackground="new 0 0 24 24"
                                            height="32px"
                                            viewBox="0 0 24 24"
                                            width="32px"
                                            fill="#1877f2">
                                            <rect 
                                                fill="none"
                                                height="24"
                                                width="24"/>
                                                <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/>
                                        </svg>
                                    </a>
                                </S.Icon>
                            </Flex>
                        </Box>
                    </Flex>
                </Grid>

                <Grid
                    column="2/3"
                    row="1/4">

                    <Flex
                        direction="column"
                        justify="center"
                        align="center">
                        
                        <Box
                            w="auto"
                            h="100%"
                            marginTop="30px">

                            <Flex
                                direction="column"
                                align="flex-start">

                                <ul>
                                    <li><a href="#home">Inicio</a></li>
                                    <li><a href="#about">Sobre</a></li>
                                    <li><a href="#localization">Localização</a></li>
                                    <li><a href="#contact">Contacte-nos</a></li>
                                </ul>
                            </Flex>
                        </Box>
                    </Flex>
                </Grid>

                <Grid
                    column="3/4"
                    row="1/4">

                    <Flex
                        direction="column"
                        justify="flex-end"
                        align="flex-end">
                        
                        <Box
                            w="auto"
                            h="auto">

                            <Flex
                                direction="column"
                                align="flex-end">

                                <S.CreatedBy>
                                    <p><a href="https://rodrigonave.com/" target="_blank" rel="noreferrer">@Criado por Rodrigo Nave</a></p>
                                </S.CreatedBy>
                            </Flex>
                        </Box>
                    </Flex>
                </Grid>
            </GridTemplate>
        </S.Footer>
    );
}

export default Footer;