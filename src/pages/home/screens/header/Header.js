import { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GridTemplate, Grid, Flex, BackgroundImage } from 'components/core/Core'

import * as S from './Style';

import headerImg from 'assets/images/frescorOld1.jpg';

import { HomeContext } from '../../Home'

const Header = () => {

    gsap.registerPlugin(ScrollTrigger);

    const year = (new Date().getFullYear()) - 1973;

    const title = `${year} anos de serviço!`;
    
    const homeContext = useContext(HomeContext);

    useEffect(() => {

        gsap.to(homeContext.header,
                { opacity:0,
                  y: -1000,
                  scrollTrigger: {
                      trigger: homeContext.main,
                      toogleActions: "restart pause reverse pause",
                      start: "top bottom",
                      end: "center",
                      scrub: true
                  },
                  duration: 1 })

    })

    return (
        <S.HeaderDiv 
            id="home"
            ref={el => homeContext.header = el}>
            <GridTemplate
                columns="1fr 1fr"
                rows="1fr 1fr">
                <Grid
                    column="1/3"
                    row="1/3">
                    <BackgroundImage
                        w="100%"
                        h="100%"
                        url={headerImg}
                        position="center"
                        size="cover"
                        attachment="fixed"
                        opacity="0.5"/>
                </Grid>

                <S.ContainerDiv>
                    <GridTemplate
                        columns="200px 1fr"
                        rows="1fr 1fr">

                        <S.BarDiv />

                        <S.MainDiv>
                            <S.MainContentDiv>
                                <GridTemplate
                                    columns="1fr 1fr"
                                    rows="50px 1fr">

                                    <Grid
                                        column="2/3"
                                        row="1/2">
                                        
                                        <Flex
                                            justify="flex-end"
                                            align="flex-start">

                                            <S.Text>
                                                <a href="#about">1973</a>    
                                            </S.Text>
                                        </Flex>
                                    </Grid>

                                    <Grid
                                        column="1/3"
                                        row="2/3">

                                        <div style={{margin:'80px'}}>
                                            <p>{title}</p>
                                            <h1>Fres<span>cor</span></h1>
                                            <S.Line />
                                            <S.TextBox>
                                                Acessórios para electrodomésticos,
                                                Máquinas de Roupa, Loiça, Frigoríficos,
                                                Micro-onda, Esquentadores , Fogões e Aspiradores.
                                            </S.TextBox>
                                        </div>
                                    </Grid>
                                </GridTemplate>
                            </S.MainContentDiv>
                        </S.MainDiv>
                    </GridTemplate>
                </S.ContainerDiv>
            </GridTemplate>
        </S.HeaderDiv>
    );
}

export default Header;