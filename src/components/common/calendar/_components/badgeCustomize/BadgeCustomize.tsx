import classNames from 'classnames/bind';
import styles from './BadgeCustomize.module.scss';

type Props = {
  content?: string;
  color?: string;
};

const cx = classNames.bind(styles);

const BadgeCustomize = (props: Props) => {
  const { content, color } = props;

  const dynamicColor = {
    '--border-color': color,
    '--bg-color': `${color}10`,
  } as React.CSSProperties;
  return (
    <>
      <div style={dynamicColor} className={cx('container')}>
        {content}
      </div>
    </>
  );
};

export default BadgeCustomize;
