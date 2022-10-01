import PropTypes from 'prop-types';
import { GroupButton, ButtonFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <GroupButton>
      {options.map(option => {
        return (
          <ButtonFeedback
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </ButtonFeedback>
        );
      })}
    </GroupButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
