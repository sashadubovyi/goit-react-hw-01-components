import PropTypes from 'prop-types';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let backgroundColor = '#';
  for (let i = 0; i < 6; i++) {
    backgroundColor += letters[Math.floor(Math.random() * 16)];
  }
  return backgroundColor;
};

const StatisticsStatsItem = ({ label, percentage }) => {
  const itemStyle = {
    backgroundColor: getRandomColor(),
    width: '150px',
    height: '110px',
    textAlign: 'center',
  };

  const labelStyle = {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '300',
  };

  const percentageStyle = {
    color: '#fff',
    fontSize: '50px',
  };

  return (
    <li className="item" style={itemStyle}>
      <span className="label" style={labelStyle}>
        {label}
      </span>
      <br></br>
      <span className="percentage" style={percentageStyle}>
        {percentage}%
      </span>
    </li>
  );
};

StatisticsStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsStatsItem;
