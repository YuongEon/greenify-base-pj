import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { BaseButton } from '~/components';
import { ButtonTypeEnum } from '~/utils/enum';
import { adminRouteAbsolute } from '~/utils/constants/route';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Login = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const navigate = useNavigate();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleLogin = () => {
    navigate(`${adminRouteAbsolute.dashboard}`);
  };
  //#endregion Handle Function
  return (
    <>
      Login Admin Page
      <BaseButton text={'Login'} type={ButtonTypeEnum.PRIMARY} onClick={handleLogin} />
    </>
  );
};

export default Login;
