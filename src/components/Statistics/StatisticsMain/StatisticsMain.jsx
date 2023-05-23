import data from '../../../data/data.json';
import StatisticsStats from 'components/Statistics/StatisticsStats/StatisticsStats';
import StatisticsTitle from 'components/Statistics/StatisticsTitle/StatisticsTitle';
import { StatisticsMain } from './StatisticsMain.styled';

const title = 'Upload stats';

const Statistics = () => {
  return (
    <StatisticsMain>
      <StatisticsTitle stats={title} />
      <StatisticsStats stats={data} />
    </StatisticsMain>
  );
};

export default Statistics;
