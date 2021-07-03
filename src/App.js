import React from "react";
import profileimg from "./profileimg.gif";
import Data from "./Data.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: " ",
      fullName: " ",
      bio: " ",
      profession: " ",
      show: true,
    };
  }
  displayProfile = () => {
    if (this.state.show) {
      this.setState({
        imgSrc: " ",
        fullName: "Hafeez Gbenle ",
        bio: "I am learning react Js",
        profession: "System Administrator",
      });
    } else {
      this.setState({});
    }
  };

  render() {
    return (
      <div className= 'main-container'>
        <Data
          imgSrc={this.state.imgSrc}
          fullName={this.state.fullName}
          bio={this.state.bio}
          profession={this.state.profession}
          displayProfile={this.displayProfile}
        >
          <img src={profileimg} alt='profile'/>
        </Data>
      </div>
    );
  }
}

export default App;
