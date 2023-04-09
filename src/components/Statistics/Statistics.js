import PropType from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={`${styles.item} ${styles[id]} `} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentag}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.PropType = {
  title: PropType.string,
  stats: PropType.shape({
    id: PropType.string.isRequired,
    label: PropType.string.isRequired,
    percentage: PropType.number.isRequired,
  }),
};
