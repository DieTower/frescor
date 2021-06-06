import { useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Flex, Box } from 'components/core/Core';

import * as S from './Style';

import { MainContext } from '../../Main';

const Brands = () => {

    const mainContext = useContext(MainContext);

    gsap.registerPlugin(ScrollTrigger);

    let text = useRef(null);

    let img1 = useRef(null);
    let img2 = useRef(null);
    let img3 = useRef(null);
    let img4 = useRef(null);
    let img5 = useRef(null);
    let img6 = useRef(null);

    useEffect(() => {

        gsap.to([img1, img2, img3, img4, img5, img6],
                {  scrollTrigger: {
                      trigger: mainContext.brands,
                      toogleActions: "restart pause reverse pause",
                      start: "top 50%",
                      end: "90% 70%",
                      scrub: true
                  },
                  css: { transform: 'translateY(0px)', opacity: '1' },
                  duration: 1 });

        gsap.from( text,
                    { scrollTrigger: {
                        trigger: mainContext.brands,
                        toogleActions: "restart pause reverse pause",
                        start: "top 50%",
                        end: "90% 70%",
                        scrub: true,
                    },
                    css: { textShadow: '5px 3px 2px #000000' },
                    duration: 1 });

        gsap.to(mainContext.brands,
                { opacity:0,
                  y: -1000,
                  scrollTrigger: {
                      trigger: mainContext.about,
                      toogleActions: "restart pause reverse pause",
                      start: "top bottom",
                      end: "center",
                      scrub: true
                  },
                  duration: 1 });

    })

    return (
        <S.Brands 
            ref={el => mainContext.brands = el}>
            <Flex
                direction="column"
                justify="center"
                align="center">
                
                <Box
                    w="auto"
                    h="800px">
                    
                    <Flex
                        direction="column"
                        justify="center"
                        align="center"
                        style={{position:'relative'}}>

                        <S.Image ref={el => img1 = el} />
                        <S.Image ref={el => img2 = el}  />
                        <S.Image ref={el => img3 = el} />
                        <S.Image ref={el => img4 = el} />
                        <S.Image ref={el => img5 = el} />
                        <S.Image ref={el => img6 = el} />
                        
                        <S.Text ref={el => text = el}>Marcas <span>com as quais trabalhamos</span></S.Text>
                    </Flex>
                </Box>
            </Flex>
        </S.Brands>
    );
}

export default Brands;