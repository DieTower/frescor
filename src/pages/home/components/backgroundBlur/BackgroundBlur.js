import { Flex } from 'components/core/Core'

import './BackgroundBlur.scss';

const BackgroundBlur = ({ position, margin, blur, start, end }) => {

    // const blurPosition = position === 'top' ? 'flex-start'

    const gradientPosition = position === 'right' ? 90 :
                             position === 'left' ? -90 :
                             position === 'bottom' ? 180 : 0;

    const flexJustify = position === 'left' ? 'flex-start' : 'flex-end';
    const flexAlign = position === 'top' ? 'flex-start' : 'flex-end';

    const style = {
        "container": {
            backgroundImage:`linear-gradient(${gradientPosition}deg, ${start}, ${start}, ${end})`
        },
        "blur": {
            width: (position === 'left' || position === 'right') && '200px',
            height: (position === 'left' || position === 'right') && '100%',
            filter:`blur(${blur}px)`,
            marginBottom: `${margin}px`
        }
    }

    return (
        <div className="backgroundBlur" style={style.container}>
            <Flex
                justify={flexJustify}
                align={flexAlign}>
                
                <div className="blur" style={style.blur}></div>
            </Flex>
        </div>
    );
}

BackgroundBlur.defaultProps = {
    position: 'top',
    margin: 100,
    blur: -50
}

export default BackgroundBlur;