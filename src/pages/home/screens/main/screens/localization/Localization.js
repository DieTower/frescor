import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Flex } from 'components/core/Core'

import * as S from './Style';

import { MainContext } from '../../Main';

const Localization = () => {

    gsap.registerPlugin(ScrollTrigger);

    const mainContext = useContext(MainContext);

    let label = useRef(null);
    let mapFrame = useRef(null);

    let tl = gsap.timeline();

    useEffect(() => {

        tl.from([label, mapFrame],
                {  scrollTrigger: {
                   trigger: mainContext.localization,
                   toogleActions: "restart pause reverse pause",
                   start: "top 50%",
                   end: "40% 60%",
                   scrub: true
                },
                css: { opacity: '0.1' },
                duration: 1 });
        
        gsap.to(mainContext.localization,
                { y: -100,
                  scrollTrigger: {
                      trigger: mainContext.contact,
                      toogleActions: "restart pause reverse pause",
                      start: "top bottom",
                      end: "center",
                      scrub: true
                  },
                  css: { opacity: '0.1' },
                  duration: 1 });

    });

    return (
        <S.Localization 
            id="localization"
            ref={el => mainContext.localization = el}>
            <div className="container">
                <S.Label>
                    <Flex
                        justify="flex-end">
                        <div className="text" ref={el => label = el}>Localização</div>
                    </Flex>
                </S.Label>
                
                <S.MapContainer ref={el => mapFrame = el}>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title="maps"
                                    className="gmap_iframe"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=628&amp;height=400&amp;hl=en&amp;q=Frescor&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                </S.MapContainer>
            </div>
        </S.Localization>
    );
}

export default Localization;