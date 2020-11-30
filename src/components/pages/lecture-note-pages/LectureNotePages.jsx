import React from 'react';
import Navbar from './../../Navbar/Navbar';
import Footer from './../../footer/Footer';
import NavTab from './../../ui/Tabs';
import LectureCards from '../../lecture-cards/LectureCards';
import styled from 'styled-components';
import randomColor from 'randomcolor';
const LectureNotePages = () => {
  return (
    <div className="home-pages">
      <Navbar />
      <NavTab
        child1={<LectureNoteCard />}
        child2={<div>2</div>}
        child3={<div>1</div>}
      />
      <Footer />
    </div>
  );
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;
const color = randomColor({
  count: 25,
  luminosity: 'random',
  hue: 'random',
});
console.log({ color });
const LectureNoteCard = () => (
  <CardWrapper>
    {color.map((item, index) => (
      <LectureCards key={index} data={item} color={item} />
    ))}
  </CardWrapper>
);
export default LectureNotePages;
