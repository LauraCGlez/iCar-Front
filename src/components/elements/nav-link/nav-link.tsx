import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import './nav-link.css';

interface NavLinkProps extends LinkProps {
  variant: 'link' | 'button-filled' | 'button-transparent' | 'wrapper';
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

  const getModifiers = () => {
    if (variant) {
      const modifier = variant.replace('-', '--');
      return `${defaultClassName}--${modifier}`;
    }
  }

  const modifiers = getModifiers();

  return (
    <Link className={`${defaultClassName} ${modifiers}`} to={to}>
      {icon}
      {children}
    </Link>
  );
};

export default NavLink;