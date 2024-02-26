import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './Header.module.scss';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

type Props = {};

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
