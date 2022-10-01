import React, { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { ContainerFeedback } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target }) => {
    const nameFeedback = target.name;
    this.setState(prevState => {
      return {
        [nameFeedback]: prevState[nameFeedback] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const resaultTotal = this.countTotalFeedback();

    const { good } = this.state;

    const resaultPercentage = Math.round((good * 100) / resaultTotal);
    return resaultPercentage ? resaultPercentage : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const objState = Object.keys(this.state);

    return (
      <ContainerFeedback>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objState}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </ContainerFeedback>
    );
  }
}
