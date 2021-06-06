import PropTypes from 'prop-types';

const Text = (props) => {

    const style = {
        "text": {
            "backgroundColor": props.bgColor,
            "color": props.color,
            "fontFamily": props.family,
            "fontSize": props.size,
            "fontWeight": props.weight,
            "textShadow": props.shadow,
            "letterSpacing": props.space,
            "lineHeight": props.height,
            "textAlign": props.align,
            "writingMode": props.orientation==='vertical' ? 'vertical-rl' : '',
            "textOrientation": props.orientation==='vertical' ? 'upright' : '',
            "display": "flex",
            "flexDirection": "row"
        }
    }

    return(
        <div style={Object.assign({}, style.text, props.style)}
             id={props.id}
             className={props.className}>
            {props.text ? props.text : props.children}
        </div>
    );
}

Text.defaultProps = {
    bgColor:'transparent',
    color:'#000000'
}

Text.propsTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    family: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    shadow: PropTypes.string,
    space: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    style: PropTypes.object
}

export default Text;