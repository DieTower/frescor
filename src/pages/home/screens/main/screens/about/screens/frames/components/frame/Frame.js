import * as S from './Style';

const Frame = ({ src, position, size, column, row, transform, refFrame, hoverPosition }) => {

    return (
        <S.Frame
            column={column}
            row={row}
            transform={transform}
            ref={refFrame}>

            <S.Image
                src={src}
                position={position}
                size={size}
                hoverPosition={hoverPosition}>

                <div className="glass"></div>
            </S.Image>
        </S.Frame>
    );
}

Frame.defaultProps = {
    position: 'center',
    size: 'cover',
    hoverTransform: 'scale(1.1)'
}

export default Frame;