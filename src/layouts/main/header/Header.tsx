import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <>
      <div id='headerMain' className={cx('headerWrap')}>
        <div className={cx('search')}>Input component</div>
        <div className={cx('headerRight')}>
          <div className={cx('icon')}>Bell</div>
          <span className={cx('pipe')}></span>
          <div className={cx('headerUserAccount')}>
            <div className={cx('username')}>Username</div>
            <div className={cx('avatar')}>D</div>
            <span className={cx('dropDownBtn')}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
