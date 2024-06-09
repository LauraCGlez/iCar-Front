import { Link, LinkProps, NavLink } from 'react-router-dom';
import React from 'react';
import './dynamic-link.css';

interface NavLinkProps extends LinkProps {
  variant?: 'link' | 'button-filled' | 'button-transparent' | 'wrapper';
  icon?: React.ReactNode;
  isNavLink?: boolean;
}

const DynamicLink = (props: NavLinkProps) => {
  const {
    to,
    children,
    variant,
    icon,
    isNavLink
  } = props;
  const defaultClassName = 'link';

  const getVariantClass = () => {
    if (variant) {
      const modifier = variant.replace('-', '--');
      return `${defaultClassName}--${modifier}`;
    } else {
      return `${defaultClassName}--wrapper`;
    }
  }

  const variantClass = getVariantClass();

  return isNavLink ? (
    <NavLink className={`${defaultClassName} ${variantClass}`} to={to}>
      {icon}
      {children}
    </NavLink>
  ) : (
    <Link className={`${defaultClassName} ${variantClass}`} to={to}>
      {icon}
      {children}
    </Link>
  );
};

export default DynamicLink;