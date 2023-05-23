import PropTypes from 'prop-types';
import {
  LabelStyle,
  PercentageStyle,
  StatisticsItem,
} from './StatisticsStatsItem.styled';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let backgroundColor = '#';
  for (let i = 0; i < 6; i++) {
    backgroundColor += letters[Math.floor(Math.random() * 16)];
  }
  return backgroundColor;
};

const StatisticsStatsItem = ({ id, label, percentage }) => {
  return (
    <StatisticsItem key={id} color={getRandomColor()}>
      <LabelStyle>{label}</LabelStyle>
      <br></br>
      <PercentageStyle>{percentage}%</PercentageStyle>
    </StatisticsItem>
  );
};

StatisticsStatsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsStatsItem;
