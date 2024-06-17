import React from 'react';

const ICarLogo = (props) => {
    const { variant = 'default', ...rest } = props;

    const alternativeColor = '#FFFFFF';
    let primaryColor = '#8DD3BB';
    let secondaryColor = '#112211';

    if (variant === 'inverted') {
        secondaryColor = alternativeColor;
    }
    if (variant === 'alternative') {
        primaryColor = alternativeColor;
    }

    return (
        <svg
            width="550"
            height="236"
            viewBox="0 0 550 236"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            {/* SVG content */}
        </svg>
    );
};

export default ICarLogo;