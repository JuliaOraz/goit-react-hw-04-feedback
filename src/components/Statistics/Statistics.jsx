import PropTypes from 'prop-types';
import { StatisticsRow } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <>
      <StatisticsRow>
        Good: <b>{good}</b>
      </StatisticsRow>
      <StatisticsRow>
        Neutral: <b>{neutral}</b>
      </StatisticsRow>
      <StatisticsRow>
        Bad: <b>{bad}</b>
      </StatisticsRow>
      <StatisticsRow>
        Total: <b>{total}</b>
      </StatisticsRow>
      <StatisticsRow>
        Positive feedback: <b>{positivePercentage} %</b>
      </StatisticsRow>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
