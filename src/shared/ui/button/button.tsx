import { ButtonHTMLAttributes, type FC } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

export type ButtonMods =
  | 'primary'
  | 'red'
  | 'secondary'
  | 'withBorder'
  | 'toggleButton'
  | 'outline';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mods?: ButtonMods;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    mods,
    className: currentClassName,
    type = 'button',
    disabled = false,
    ...otherProps
  } = props;

  const className = cn(
    styles.uiButton,
    currentClassName,
    styles[`uiButton--${mods}`],
  );

  return (
    <button
      type={type}
      disabled={disabled}
      {...otherProps}
      className={className}
    >
      <div>{text}</div>
    </button>
  );
};

export default Button;
