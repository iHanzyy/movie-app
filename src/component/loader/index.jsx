import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';
const LoaderSkeleton = (props) => {
  const { width, height, shape, radius } = props;
  return (
    <div
      className={classNames(styles.skeleton, {
        [styles.rounded]: shape === 'circle',
      })}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
      }}
    />
  );
};
export default LoaderSkeleton;
LoaderSkeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  shape: PropTypes.oneOf(['square', 'circle']),
  radius: PropTypes.number,
};
LoaderSkeleton.defaultProps = {
  width: 300,
  height: 57,
  shape: 'square',
  radius: 0,
};