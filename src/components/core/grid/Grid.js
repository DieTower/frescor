import PropTypes from 'prop-types';

const Grid = (props) => {

    const style = {
        "grid": {
            "gridColumn": props.column,
            "gridRow": props.row,
            "backgroundColor": props.bgColor,
            "zIndex": props.zIndex
        }
    }

    return (
        <div style={Object.assign({}, style.grid, props.style)}
             id={props.id}
             className={props.className}>
            {props.children}
        </div>
    );
}

Grid.defaultProps = {
    bgColor:'transparent'
}

Grid.propsTypes = {
    column:PropTypes.string,
    row:PropTypes.string,
    bgColor:PropTypes.string,
    zIndex:PropTypes.number,
    style:PropTypes.object
}

export default Grid;