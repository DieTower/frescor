import PropTypes from 'prop-types';

const Box = (props) => {

    const style = {
        "box": {
            "backgroundColor": props.bgColor,
            "width": props.w,
            "height": props.h,
            "minWidth": props.wMin,
            "minHeight": props.hMin,
            "margin": props.margin,
            "marginTop": props.marginTop,
            "marginBottom": props.marginBottom,
            "marginLeft": props.marginLeft,
            "marginRight": props.marginRight,
            "padding": props.padding,
            "paddingTop": props.paddingTop,
            "paddingBottom": props.paddingBottom,
            "paddingLeft": props.paddingLeft,
            "paddingRight": props.paddingRight,
            "borderRadius": props.radius,
            "borderTopLeftRadius": props.radiusTopLeft,
            "borderTopRightRadius": props.radiusTopRight,
            "borderBottomLeftRadius": props.radiusBottomLeft,
            "borderBottomRightRadius": props.radiusBottomRight,

        }
    }

    return (
        <div style={Object.assign({}, style.box, props.style)}
             id={props.id}
             className={props.className}
             onClick={props.onClick}
             onMouseEnter={props.onMouseEnter}
             onMouseLeave={props.onMouseLeave}
             onScroll={props.onScroll}>
            {props.children}
        </div>
    )
}

Box.defaultProps = {
    bgColor:'transparent',
    w:'100px',
    h:'100px',
}

Box.propsTypes = {
    bgColor: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    wMin: PropTypes.string,
    hMin: PropTypes.string,
    margin: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    padding: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    radius: PropTypes.string,
    radiusTopLeft: PropTypes.string,
    radiusTopRight: PropTypes.string,
    radiusBottomLeft: PropTypes.string,
    radiusBottomRight: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    onScroll: PropTypes.func,
}

export default Box;