import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.scss';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
