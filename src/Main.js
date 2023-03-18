import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Picture Project</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
			<li><NavLink to="/hobbies">Hobbies</NavLink></li>
          </ul>
          <div className="content">
		  <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/stuff" element={<Stuff/>}/>
            <Route path="/contact" element={<Contact/>}/>
			<Route path="/hobbies" element={<Hobbies/>}/>
		  </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;