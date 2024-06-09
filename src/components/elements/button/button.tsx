import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'newsletter';
  size: 'small' | 'medium' | 'large' | 'largest';
  icon: 'none' | 'left' | 'right' | 'icon-only';
  iconSvg?: React.ReactNode;
  text?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant,
    size,
    icon,
    iconSvg,
    text,
    onClick
  } = props;
  const defaultClass = 'button';

  const getVariantClass = () => {
    const variantMap = {
      primary: `${defaultClass}--primary`,
      secondary: `${defaultClass}--secondary`,
      tertiary: `${defaultClass}--tertiary`,
      newsletter: `${defaultClass}--newsletter`,
    };
    return variantMap[variant] || '';
  };

  const getSizeClass = () => {
    const sizeMap = {
      small: `${defaultClass}--small`,
      medium: `${defaultClass}--medium`,
      large: `${defaultClass}--large`,
      largest: `${defaultClass}--largest`,
    };
    return sizeMap[size] || '';
  };

  const getIconClass = () => {
    const iconMap = {
      none: '',
      left: `${defaultClass}--icon-left`,
      right: `${defaultClass}--icon-right`,
      'icon-only': `${defaultClass}--icon-only`,
    };
    return iconMap[icon] || '';
  };

  const variantClass = getVariantClass();
  const sizeClass = getSizeClass();
  const iconClass = getIconClass();

  const getButtonContent = () => {
    const contentMap = {
      left: (
        <>
          {iconSvg}
          {text}
        </>
      ),
      right: (
        <>
          {text}
          {iconSvg}
        </>
      ),
      'icon-only': iconSvg,
      none: text,
    };
    return contentMap[icon] || text;
  };

  const buttonContent = getButtonContent();

  return (
    <button
      className={`${defaultClass} ${variantClass} ${sizeClass} ${iconClass}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
