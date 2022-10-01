import { useState } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { ContainerFeedback } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackOptions = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = ({ target }) => {
    const nameFeedback = target.name;

    switch (nameFeedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const feedBackTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / feedBackTotal()) || 0;
  };

  return (
    <ContainerFeedback>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedBackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {feedBackTotal !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedBackTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </ContainerFeedback>
  );
};

export default App;
