import React from "react";
import profileimg from "./profileimg.gif";
import Data from "./Component/Data.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: profileimg,
      fullName : 'Hafeez Gbenle',
      bio : 'Learning React js',
      profession: 'System Administrator',
      show: false
    };
  }
  displayProfile = () =>{
    this.setState( (prevState) =>{
      return{
        ...prevState,show: !prevState.show,
      }
    })
  }

   buttonStyle = {
    backgroundColor: "#ccffcc",
    borderColor: "#ccffcc",
    borderRadius: "5px",
    padding: "0.5rem",
  };
  
  render() {
    return (
      <div className="main-container">
        {this.state.show && (
          <Data
          imgSrc={this.state.imgSrc}
          fullName={this.state.fullName}
          bio={this.state.bio}
          profession={this.state.profession}
          displayProfile={this.displayProfile}
        />
          
        )}
        <button 
        onClick={this.displayProfile} style={this.buttonStyle}
        className ='btn'>
        show profile
      </button>
      </div>
    );
  }
}

export default App;
