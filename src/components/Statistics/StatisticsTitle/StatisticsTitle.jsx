import PropTypes from 'prop-types';

// зробив через дефолтне значення (як показували на лекції)

const titleDefault = 'Upload stats';

const StatisticsTitle = ({ title = titleDefault }) => {
  return (
    <h2 className="title" style={titleStyle}>
      {title}
    </h2>
  );
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;

const titleStyle = {
  paddingTop: '50px',
  paddingBottom: '50px',
  fontWeight: '300',
};
