import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './Main.module.scss';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

const cx = classNames.bind(styles);

const Main = (props: Props) => {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{props.children}</div>
      </div>
    </div>
  );
};

export default Main;
