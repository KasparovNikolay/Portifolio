import { CSSProperties, useEffect, useState } from 'react';

/*
  Draft
  Hook let you make initial animation
*/
type useTransitionState = CSSProperties | undefined;
type useTransitionProps = {
  intialStyle?: CSSProperties;
  delay?: number;
  fade?: boolean;
  type?: 'transition';
  direction?: 'top' | 'left' | 'right' | 'button';
};
type useTransitionType = (props?: useTransitionProps) => {
  style: useTransitionState;
};

const getStylesFromProps = (props?: useTransitionProps): CSSProperties => {
  if (!props)
    return {
      transform: 'translateX(-500px)',
      opacity: 0,
      transition: '300ms',
    };

  if (props.intialStyle) return props.intialStyle;
  const { delay, type, direction, fade } = props;
  const result: CSSProperties = {
    transition: `opacity ${delay || 320}ms ease-in 0s, transform ${
      delay || 300
    }ms ease-out 0s`,
  };
  const transtionDirections = {
    left: 'translateX(-500px)',
    right: 'translateX(500px)',
    top: 'translateY(300px)',
    button: 'translateY(-300px)',
  };
  if (type === 'transition' && !!direction) {
    result.transform = transtionDirections[direction];
  }
  if (fade) {
    result.opacity = 0;
  }
  return result;
};

export const useTransition: useTransitionType = (props) => {
  const [style, setStyle] = useState<useTransitionState>(
    getStylesFromProps(props)
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStyle({
        transition: 'opacity 320ms ease-in 0s, transform 300ms ease-out 0s',
      });
    }, props?.delay || 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return { style };
};
