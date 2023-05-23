import StatisticsStatsItem from 'components/Statistics/StatisticsStatsItem/StatisticsStatsItem';
import { StatList } from './StatisticsStats.styled';

const StatisticsStats = ({ stats }) => {
  return (
    <StatList>
      {stats.map(el => (
        <StatisticsStatsItem key={el.id} {...el} />
      ))}
    </StatList>
  );
};

export default StatisticsStats;
