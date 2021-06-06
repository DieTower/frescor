import PropTypes from 'prop-types';

const Button = (props) => {

    const style = {
        "button": {
            "width": props.w,
            "height": props.h,
            "padding": "8px 28px",
            "backgroundColor": props.bgColor ? props.bgColor : 'rgba(0,0,0,0.8)',
            "border": props.borderColor ? '2px solid ' + props.borderColor : props.bgColor ? '2px solid ' + props.bgColor : '2px solid rgba(0,0,0,0.8)',
            "borderRadius": props.radius ? props.radius : 100 + 'px',
            "cursor": "pointer",
            "fontFamily": "Roboto",
            "fontSize": props.fontSize,
            "transform": `scale(${props.size})`,
            "transitionProperty": "transform background-color",
            "transitionDuration": "0.3s",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "alignItems": "center"
        },
        "span": {
            "display": "inline-block",
            "transform": "translateY(-2px)",
            "fontWeight": "700",
            "color": props.textColor ? props.textColor : props.bgColor ? '#000000' : '#ffffff',
            "transitionProperty": "transform",
            "transitionDuration": "0.3s"
        }
    }

    return (
        <div style={Object.assign({}, style.button, props.style)}
             id={props.id}
             className={props.className}
             onClick={props.onClick}
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}>
            <span style={style.span}>{props.text ? props.text : props.children ? props.children : 'button' }</span>
        </div>
    );
}

Button.defaultProps = {
    w: 'auto',
    h: 'auto',
    size: 1,
    fontSize:'12px'
}

Button.propsTypes = {
    size: PropTypes.number,
    text: PropTypes.string,
    textColor: PropTypes.string,
    fontSize: PropTypes.string,
    bgColor: PropTypes.string,
    bgColorHover: PropTypes.string,
    borderColor: PropTypes.string,
    radius: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
}

export default Button;