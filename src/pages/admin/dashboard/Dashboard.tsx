import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import CalenderCustom from '~/components/common/calendar/Calendar';

const cx = classNames.bind(styles);

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <article id='dashboardAdmin' className={cx('container')}>
        <h3 className={cx('title')}>Welcome, Carolina!</h3>
        <section className={cx('dashboardSyntheticCards')}>
          <div className={cx('dashboardSyntheticCardItem')}>1</div>
          <div className={cx('dashboardSyntheticCardItem')}>2</div>
          <div className={cx('dashboardSyntheticCardItem')}>3</div>
          <div className={cx('dashboardSyntheticCardItem')}>4</div>
        </section>
        <section className={cx('syntheticInfo')}>
          <div className={cx('analyticsReport')}>
            <div className={cx('analytics')}>analytics</div>
            <div className={cx('analyticsIntersection')}>analyticsIntersection</div>
          </div>
          <aside className={cx('sideTopItems')}>
            <div className={cx('sideTopItemsHeader')}>
              <h4>Top Technicians</h4>
              <div>
                <Button type='primary' onClick={showModal} className={cx('bg-green-500')}>
                  Open Modal
                </Button>
                <Modal title='Basic Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </div>
            </div>
            <div className={cx('sideTopItemsBody')}>
              <div className={cx('sideTopItemsBodyItem')}>1</div>
              <div className={cx('sideTopItemsBodyItem')}>2</div>
              <div className={cx('sideTopItemsBodyItem')}>3</div>
              <div className={cx('sideTopItemsBodyItem')}>4</div>
              <div className={cx('sideTopItemsBodyItem')}>5</div>
              <div className={cx('sideTopItemsBodyItem')}>6</div>
              <div className={cx('sideTopItemsBodyItem')}>7</div>
            </div>
          </aside>
        </section>
        <section>
          <CalenderCustom />
        </section>
      </article>
    </>
  );
};

export default Dashboard;
