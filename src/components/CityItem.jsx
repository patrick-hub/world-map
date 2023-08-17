import styles from './CityItem.module.css'
import PropTypes from 'prop-types';


const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({city}) {
    const {cityName, emoji, date} = city
    console.log(cityName);
    console.log(city);
    return <li className={styles.cityItem}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </li>

    
}

CityItem.propTypes = {
    city: PropTypes.array.isRequired,
  };

export default CityItem
