const { default: Navbar } = require("./components/Navbar/Navbar");
const { default: About } = require("./components/about/About");

import './App.css';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
