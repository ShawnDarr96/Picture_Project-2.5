import React, { Component } from "react";
import image from "./image.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>This picture was taken somewhere in Japan!.</p>

        <p>Its one of my favorites!.</p>
		<img src={image} alt="image" />
      </div>

    );
  }
}
 
export default Home;