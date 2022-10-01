import PropTypes from 'prop-types';
import { SectionFeedback, Caption } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionFeedback>
      <Caption>{title}</Caption>
      {children}
    </SectionFeedback>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
