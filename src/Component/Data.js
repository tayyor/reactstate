import React from "react";
import "../App.css";

const Data = ({fullName,imgSrc:profileimg,profession,bio}) => {
  const getStyle = { textAlign: "center" };
  
      
      
  return (
    <div style={getStyle}>
      <div>
        <img src={profileimg} alt="profilepic"/>
      </div>
      <div>
        <span>
          <h4>Name: {fullName}</h4>
        </span>
      </div>
      <div>
        <span>
          <h4>Bio: {bio}</h4>
        </span>
      </div>
      <div>
        <span>
          <h4>Profession: {profession}</h4>
        </span>
      </div>
      
    </div>
  );
};
export default Data;


