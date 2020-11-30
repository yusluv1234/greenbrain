import React from 'react'
const { default: Navbar } = require("../../Navbar/Navbar");
const { default: About } = require("../../about/About");
const { default: Objective } = require("../../objective/Objective");
const { default: Lecture } = require("../../lecture/Lecture");
const { default: Uploading } = require("../../Upload/Uploading");
const { default: Footer } = require("../../footer/Footer");



function HomePages() {
    return (
        <div className='home-pages'>
        <Navbar />
        <About />
        <Objective />
        <Lecture />
        <Uploading />
        <Footer />
        </div>
    )
}

export default HomePages
