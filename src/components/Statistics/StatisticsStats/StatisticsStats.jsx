import StatisticsStatsItem from 'components/Statistics/StatisticsStatsItem/StatisticsStatsItem';

const StatisticsStats = ({ stats }) => {
  return (
    <ul className="stat-list" style={statListStyle}>
      {stats.map(el => (
        <StatisticsStatsItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default StatisticsStats;

const statListStyle = {
  display: 'flex',
};
