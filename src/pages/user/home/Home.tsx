import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return <h1 className='text-3xl font-bold underline'>Home User Page</h1>;
};

export default Home;
