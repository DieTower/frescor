import PropTypes from 'prop-types';

const GridTemplate = (props) => {

    const style = {
        "gridTemplate": {
            "width": props.w,
            "height": props.h,
            "backgroundColor": props.bgColor,
            "display": "grid",
            "gridTemplateColumns": props.columns,
            "gridTemplateRows": props.rows,
            "gap": props.gap
        }
    }

    return (
        <div style={Object.assign({}, style.gridTemplate, props.style)}
             id={props.id}
             className={props.className}>
            {props.children}
        </div>
    );
}

GridTemplate.defaultProps = {
    w: '100%',
    h: '100%'
}

GridTemplate.propsTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
    bgColor: PropTypes.string,
    columns: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    gap: PropTypes.string,
    style: PropTypes.object
}

export default GridTemplate;