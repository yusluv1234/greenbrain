import React from 'react';
import Navbar from './../../Navbar/Navbar';
import Footer from './../../footer/Footer';
import NavTab from '../../ui/Tabs';
import LectureCards from '../../lecture-cards/LectureCards';
import styled, { css } from 'styled-components';
import randomColor from 'randomcolor';
import { LectureCardsContainer } from './../../lecture-cards/LectureCards';
const LectureNotePages = () => {
  return (
    <div className="home-pages">
      <Navbar />
      <NavTab
        child1={<LectureNoteCard />}
        child2={<NoteCard />}
        child3={<MaterialCard />}
      />
      <Footer />
    </div>
  );
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  ${(props) =>
    props.type === 'project' &&
    css`
      grid-template-columns: repeat(3, 1fr);
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;

const color = randomColor({
  count: 25,
  luminosity: 'random',
  hue: 'random',
});

const LectureNoteCard = () => (
  <CardWrapper>
    {color.map((item, index) => (
      <LectureCards key={index} data={item} color={item} />
    ))}
  </CardWrapper>
);

const NoteCard = () => (
  <CardWrapper>
    {color.map((item, index) => (
      <LectureCards key={index} data={{ session: '2012/2013' }} color={item} />
    ))}
  </CardWrapper>
);
const MaterialCard = () => (
  <CardWrapper type="project">
    {Array(25)
      .fill({})
      .map((item, index) => (
        <ProjectCard data={item} key={index} />
      ))}
  </CardWrapper>
);
const ListContainer = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  column-gap: 0.4rem;
`;
const ProjectCard = () => (
  <LectureCardsContainer>
    <p>History of Karu, F.C.T Up To 1999</p>
    <ListContainer>
      <List />
      <List />
      <List />
    </ListContainer>
    <p>History of Karu, F.C.T Up To 1999</p>
  </LectureCardsContainer>
);
const List = () => (
  <li style={{ fontSize: '.9rem' }}>
    <span style={{ fontWeight: 'bolder', paddingRight: '.3rem' }}>course:</span>
    history
  </li>
);
export default LectureNotePages;
