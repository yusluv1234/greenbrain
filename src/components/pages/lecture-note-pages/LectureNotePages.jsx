import React from 'react';
import Navbar from './../../Navbar/Navbar';
import Footer from './../../footer/Footer';
import NavTab from './../../ui/Tabs';

const LectureNotePages = () => {
  return (
    <div className="home-pages">
      <Navbar />
      <div>yoo</div>
      <NavTab
        child1={<div>3</div>}
        child2={<div>2</div>}
        child3={<div>1</div>}
      />
      <Footer />
    </div>
  );
};

export default LectureNotePages;
