import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GridTemplate } from 'components/core/Core'

import Frame from './components/frame/Frame';

import * as S from './Style';

import photo1 from './images/frame1.jpg';
import photo2 from './images/frame2.jpg';
import photo3 from './images/frame3.png';
import photo4 from './images/frame4.jpg';

const Frames = ({ w, h }) => {

    gsap.registerPlugin(ScrollTrigger);

    let container = useRef(null);

    let frame1 = useRef(null);
    let frame2 = useRef(null);
    let frame3 = useRef(null);
    let frame4 = useRef(null);

    useEffect(() => {

        gsap.to([frame1, frame2, frame3, frame4],
                { 
                    scrollTrigger: {
                        trigger: container,
                        toogleActions: "restart pause reverse pause",
                        start: "top 100%",
                        end: "80% 95%",
                        scrub: true
                    },
                    css: { transform: 'translate(0px)' },
                    duration: 1
                });

        gsap.to(container,
                {
                    scrollTrigger: {
                        trigger: container,
                        toogleActions: "restart pause reverse pause",
                        start: "top 100%",
                        end: "80% 95%",
                        scrub: true
                    },
                    css: { opacity: '1' },
                    duration: 1
                })

    }, []);

    return (
        <S.Frames
            w={w}
            h={h}
            style={{ opacity: 0 }}
            ref={el => container = el}>

            <GridTemplate
                columns="repeat(2, 1fr)"
                rows="repeat(3, 1fr)"
                gap={0}>

                <Frame
                    column="1/3"
                    row="1/2"
                    src={photo1}
                    size="120%"
                    hoverPosition="5%"
                    transform='translateX(-100%)'
                    refFrame={el => frame1 = el} />

                <Frame
                    column="2/3"
                    row="2/4"
                    src={photo2}
                    transform='translateY(50%)'
                    refFrame={el => frame2 = el} />

                <Frame
                    column="1/2"
                    row="2/3"
                    src={photo3}
                    position="100%"
                    hoverPosition="90% center"
                    transform='translateX(-50%)'
                    refFrame={el => frame3 = el} />

                <Frame 
                    column="1/2"
                    row="3/4"
                    src={photo4}
                    size="140%"
                    transform='translateX(-25%)'
                    refFrame={el => frame4 = el} />
            </GridTemplate>
        </S.Frames>
    );
}

export default Frames;