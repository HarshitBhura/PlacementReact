
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Provider from './Components/Provider';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Testimonial from './Components/Testimonial';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" >
        <Navbar />
        <Provider>
          <Home />
        </Provider>
        </Route>

        <Route path="/projects">
        <Navbar />
        <Projects />
        </Route>

        <Route path="/skills">
        <Navbar />
        <Skills />
        </Route>
          
        <Route path="/testimonial">
        <Navbar />
        <Testimonial />
        </Route>
        
        <Route path="/contact">
        <Navbar />
        <Provider>
          <Contact />
        </Provider>
        </Route>
      </Switch>

      
    </Router>
      
    </div>
  );
}

export default App;


