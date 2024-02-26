import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ButtonTypeEnum } from '~/utils/enum';
import { useState } from 'react';

type Props = {
  width?: number;
  height?: number;
  type: ButtonTypeEnum;
  text: string;
  onClick?: () => void;
  className?: string;
};

const cx = classNames.bind(styles);

const Button = (props: Props) => {
  //#region Destructuring Props
  const { width = 331, height = 56, type, text, onClick, className } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [style] = useState(() => {
    switch (type) {
      case ButtonTypeEnum.PRIMARY:
        return {
          backgroundColor: '#007BFF',
          color: '#FFFFFF',
        };
    }
  });

  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleClick = () => {
    onClick && onClick();
  };
  //#endregion Handle Function

  return (
    <button
      id='buttonComponent'
      style={{ width, height, ...style }}
      onClick={handleClick}
      className={cx(className)}
    >
      {text}
    </button>
  );
};

export default Button;
