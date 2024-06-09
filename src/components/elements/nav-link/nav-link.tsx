import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import './nav-link.css';

interface NavLinkProps extends LinkProps {
  variant?: 'link' | 'button-filled' | 'button-transparent' | 'wrapper';
  icon?: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const {
    to,
    children,
    variant,
    icon
  } = props;
  const defaultClassName = 'nav-link';

  const getVariantClass = () => {
    if (variant) {
      const modifier = variant.replace('-', '--');
      return `${defaultClassName}--${modifier}`;
    } else {
      return `${defaultClassName}--wrapper`;
    }
  }

  const variantClass = getVariantClass();

  return (
    <Link className={`${defaultClassName} ${variantClass}`} to={to}>
      {icon}
      {children}
    </Link>
  );
};

export default NavLink;