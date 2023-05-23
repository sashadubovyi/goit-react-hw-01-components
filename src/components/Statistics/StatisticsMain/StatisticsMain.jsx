import data from '../../../data/data.json';
import StatisticsStats from 'components/Statistics/StatisticsStats/StatisticsStats';
import StatisticsTitle from 'components/Statistics/StatisticsTitle/StatisticsTitle';

const title = 'Upload stats';

const Statistics = () => {
  return (
    <section className="statistics" style={statisticsStyle}>
      <StatisticsTitle stats={title} />
      <StatisticsStats stats={data} />
    </section>
  );
};

export default Statistics;

const statisticsStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  color: 'black',
};
