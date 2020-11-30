import React from 'react';
import styled from 'styled-components';

const LectureCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;
const Header = styled.div`
  background-color: ${(props) => props.color || 'rgb(88, 130, 112)'};
  color: rgb(255, 255, 255);
`;

const LectureCards = ({
  data: { title, subject, university, level },
  color,
}) => {
  return (
    <LectureCardsContainer>
      <Header color={color}>
        <h3>{title || 'Biology'}</h3>
      </Header>
      <p>{subject || 'bot 203'}</p>
      <p>{university || 'university of abuja'}</p>
      <p>{level || '200level'}</p>
    </LectureCardsContainer>
  );
};

export default LectureCards;
