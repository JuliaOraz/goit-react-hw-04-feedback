import styled from '@emotion/styled';

export const GroupButton = styled.div`
  display: block;
`;

export const ButtonFeedback = styled.button`
  height: 35px;
  margin-right: 15px;
  padding: 0 20px;
  background: #efe8e8;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 250ms ease-in-out;

  :last-child{
    margin-right: 0;
  }

  :hover {
    background: ${({ name }) => {
      return (
        (name === 'good' && '#85d171') ||
        (name === 'neutral' && '#e7dd69') ||
        (name === 'bad' && '#e99898')
      );
    }};

`;
