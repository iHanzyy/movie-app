import { useState } from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';
const Card = (props) => {
  const { text = '', thumbnail, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  Card.propTypes = {
    text: PropTypes.string,
    thumbnail: PropTypes.object,
    onClick: PropTypes.func,
  };
  Card.defaultProps = {
    text: '',
    thumbnail: {},
    onClick: () => {},
  };
  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        className={styles.cardImage}
        src={thumbnail?.url ?? '/public/movies.jpg'}
        alt={text}
      />
      {isHovered && <b className={styles.cardText}>{text}</b>}
    </div>
  );
};
export default Card;