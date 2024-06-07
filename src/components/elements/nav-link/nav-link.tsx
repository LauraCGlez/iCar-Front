import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import './nav-link.css';

interface NavLinkProps extends LinkProps {
  variant: 'primary';
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
      return `${defaultClassName}--${variant}`;
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