import PropTypes from 'prop-types';

const BackgroundImage = (props) => {

    const style = {
        "backgroundImage": {
            "width": props.w,
            "height": props.h,
            "color": props.color,
            "background": `url(${props.url})`,
            "backgroundRepeat": "no-repeat",
            "backgroundAttachment": props.attachment,
            "backgroundPosition": props.position,
            "backgroundSize": props.size,
            "backgroundColor": props.bgColor,
            "filter": `blur(${props.blur + 'px'})`,
            "borderRadius": props.radius,
            "borderTopLeftRadius": props.radiusTopLeft ? props.radiusTopLeft : props.radius,
            "borderTopRightRadius": props.radiusTopRight ? props.radiusTopRight : props.radius,
            "borderBottomLeftRadius": props.radiusBottomLeft ? props.radiusBottomLeft : props.radius,
            "borderBottomRightRadius": props.radiusBottomRight ? props.radiusBottomRight : props.radius
        },
        "opacity": {
            "width": "100%",
            "height": "100%",
            "backgroundColor": `rgba(0,0,0,${props.opacity})`,
            "borderRadius": props.radius,
            "borderTopLeftRadius": props.radiusTopLeft ? props.radiusTopLeft : props.radius,
            "borderTopRightRadius": props.radiusTopRight ? props.radiusTopRight : props.radius,
            "borderBottomLeftRadius": props.radiusBottomLeft ? props.radiusBottomLeft : props.radius,
            "borderBottomRightRadius": props.radiusBottomRight ? props.radiusBottomRight : props.radius
        }
    }

    return (
        <div
            style={Object.assign({}, style.backgroundImage, props.style)}>
            <div style={style.opacity}></div>
            {props.children}
        </div>
    );
}

BackgroundImage.defaultProps = {
    position:'center',
    size:'cover',
    w: '100%',
    h: '100%',
    opacity: 0,
    blur: 0,
}

BackgroundImage.propsTypes = {
    bgColor:PropTypes.string,
    position:PropTypes.string,
    size:PropTypes.string,
    attachment:PropTypes.string,
    opacity:PropTypes.number,
    blur:PropTypes.number,
    style:PropTypes.object
}

export default BackgroundImage;