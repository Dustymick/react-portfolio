import React from "react";
import Nav from "./components/Nav";
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {

  return (
    <div> 
      
        <Nav/>
         <About/>
         <Projects/>
         <Contact/>
      
    </div>
  );
}

export default App;