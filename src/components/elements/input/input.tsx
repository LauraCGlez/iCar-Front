import React from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'standard';
}

const Input = (props: InputProps) => {
  const defaultClass = 'input';

  const getVariantClass = () => {
    const variantMap = {
      'standard': `${defaultClass}--standard`,
    };
    return variantMap[props.variant] || '';
  }

  const variantClass = getVariantClass();

  return (
    <input
      className={`${defaultClass} ${variantClass}`}
      {...props}
    />
  );
};

export default Input;