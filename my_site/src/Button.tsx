import React from 'react';
import styles from './Button.module.css';

export enum ButtonType {
  'cancel',
  'ok',
}

interface ButtonProps {
  children: JSX.Element | string;
  type?: ButtonType;
  onClick?: (e: React.SyntheticEvent) => void;
}

const getButtonClassName = (type?: ButtonType) => {
  switch (type) {
    case ButtonType.cancel: return styles.cancel;
    case ButtonType.ok: return styles.ok;
    default: return;
  }
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${getButtonClassName(props.type)}`}>
      {props.children}
    </button>
  )
}

export default Button;
