import PropTypes from 'prop-types';

const Flex = (props) => {

    const style = {
        "flex": {
            "width": "100%",
            "height": "100%",
            "display": "flex",
            "flexDirection": props.direction,
            "justifyContent": props.justify,
            "alignItems": props.align,
            "flexWrap": props.wrap,
            "backgroundColor": props.bgColor
        }
    }

    return (
        <div style={Object.assign({}, style.flex, props.style)}
             id={props.id}
             className={props.className}>
             {props.children}
        </div>
    );
}

Flex.defaultProps = {
    bgColor:'transparent'
}

Flex.propsTypes = {
    bgColor: PropTypes.string,
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    wrap: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
}

export default Flex;