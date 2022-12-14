import React, { FC } from 'react';

import { Children } from '@utils/types';
import cls from 'classnames';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import styles from './link.module.scss';

export type LinkProps = {
  type?: 'inner' | 'outer' | 'navlink';
  href: string;
  className?: string;
  onClick?: (event: unknown) => void;
  children: Children;
  activeClassName?: string;
};

const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  type = 'inner',
  activeClassName,
  ...props
}) => {
  if (!children || !href) return null;
  if (type === 'inner') {
    return (
      <RouterLink to={href} className={cls(className, styles.link)} {...props}>
        {children}
      </RouterLink>
    );
  }

  if (type === 'navlink') {
    return (
      <NavLink
        {...props}
        to={href}
        className={({ isActive }) =>
          cls(className, styles.link, isActive && activeClassName)
        }
        end
      >
        {children}
      </NavLink>
    );
  }

  return (
    <a {...props} href={href} className={cls(className, styles.link)}>
      {children}
    </a>
  );
};

export default Link;
