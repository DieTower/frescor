import { useState } from 'react'
import PropTypes from 'prop-types';

import './List.css'

const List = ({ list, direction, space, spacing, family, size, listStyle, className, hidden, color, transform }) => {

    const [hoverEffect, setHoverEffect] = useState(false);

    const style = {
        "ul": {
            listStyle: 'none',
            display: 'flex',
            flexDirection: direction ? direction : 'column',
            fontSize: '16px'
        },
        "li": {
            fontFamily:'Roboto',
            fontWeight:700,
            fontSize: size,
            color:'#ffffff',
            opacity: hidden ? 1 : 0,
            transitionProperty:'opacity transform',
            transitionDuration:'0.3s'
        },
        "a": {
            display: 'inline-block',
            fontFamily: family,
            letterSpacing: space,
            color: color ? color : '#000000',
            transitionProperty:'transform',
            transitionDuration:'0.3s'
        },
        "marginRight": {
            marginRight: spacing
        },
        "marginBottom": {
            marginBottom: spacing
        },
        "hoverEffect": {
            transform: transform ? transform : ' '
        }
    }

    return (
        <ul style={Object.assign({}, style.ul, listStyle)} className={className}>
            {list.map((list, index) => (
                <li
                    key={index}
                    style={Object.assign({}, style.li, direction === 'row' ? style.marginRight : style.marginBottom, {transitionDelay:`${index*0.15}s`})}
                    onMouseEnter={() => setHoverEffect(true)}
                    onMouseLeave={() => setHoverEffect(false)}>
                    <a href={ list.link ? list.link : '#' }
                       target={ list.target ? '_blank' : ''}
                       rel="noreferrer"
                       style={Object.assign({}, style.a, hoverEffect ? style.hoverEffect : '')}>
                       {list.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

List.defaultProps = {
    direction: 'column',
    spacing: '10px',
    size: '1em',
    hidden: true,
    listStyle: {}
}

List.propsTypes = {
    list: PropTypes.object.isRequired,
    direction: PropTypes.string,
    spacing: PropTypes.string,
    size: PropTypes.string,
    hidden: PropTypes.bool,
    transform: PropTypes.string,
    listStyle: PropTypes.object
}

export default List;