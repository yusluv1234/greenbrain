import './App.css';

const { default: Navbar } = require("./components/Navbar/Navbar");
const { default: About } = require("./components/about/About");
const { default: Objective } = require("./components/objective/Objective");
const { default: Lecture } = require("./components/lecture/Lecture");
const { default: Uploading } = require("./components/Upload/Uploading");
const { default: Footer } = require("./components/footer/Footer");



function App() {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Objective />
      <Lecture />
      <Uploading />
      <Footer />
    </div>
  );
}

export default App;
