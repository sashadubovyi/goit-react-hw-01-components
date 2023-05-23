import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle.styled';

const StatisticsTitle = () => {
  return <Title>Upload stats</Title>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
