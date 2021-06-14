import { useContext, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GridTemplate, Flex } from 'components/core/Core'

import Frames from './screens/frames/Frames'

import * as S from './Style';

import { MainContext } from '../../Main';

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

    const mainContext = useContext(MainContext);

    const year = (new Date().getFullYear()) - 1973;

    useEffect(() => {

        gsap.to(mainContext.about,
            { y: -500,
              scrollTrigger: {
                  trigger: mainContext.localization,
                  toogleActions: "restart pause reverse pause",
                  start: "top bottom",
                  end: "center",
                  scrub: true
              },
              duration: 1 });

    });

    return (
        <S.About
            id="about"
            ref={el => mainContext.about = el}>
            <GridTemplate
                columns="1fr 1fr"
                rows="1fr 1fr">

                <S.BackgroundGrid>
                    
                    <Flex
                        justify="flex-end"
                        align="center">

                        <Frames w="90%" h="90%" />
                    </Flex>
                </S.BackgroundGrid>

                <S.TextGrid>
                    <Flex
                        align="center">
                        <S.TextBox>
                            <h2>Sobre nós</h2>
                            <div className="content">
                                Somos uma loja de electrodomésticos com <b>{year} anos de serviço</b>!
                                Venha ter e falar connosco e dê uma segunda oportunidade ao seu electrodoméstico avariado.
                                Com a nossa ajuda poderá repará-lo você mesmo. Temos ao seu dispor os conselhos e produtos certos,
                                que o ajudarão a resolver o seu problema domestico.
                            </div>
                        </S.TextBox>
                    </Flex>
                </S.TextGrid>
            </GridTemplate>
        </S.About>
    );
}

export default About;