import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe/AboutMe";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/project/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
