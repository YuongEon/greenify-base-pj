import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const [itemActive, setItemActive] = useState<number>(0);

  const items = [
    {
      label: 'Item 1',
    },
    {
      label: 'Item 2',
    },
    {
      label: 'Item 3',
    },
    {
      label: 'Item 4',
    },
    {
      label: 'Item 5',
    },
    {
      label: 'Item 6',
    },
  ];

  return (
    <>
      <div id='sidebarAdmin' className={cx('sidebarLayer')}>
        <div className={cx('container')}>
          <div className={cx('logo')}>Logo</div>
          <ul className={cx('menu')}>
            {items.map((i, index) => (
              <li className={cx(itemActive === index ? 'active' : '')} onClick={() => setItemActive(index)}>
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
