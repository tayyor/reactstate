import React from "react";

const Data = (props) => {
  const getStyle = { textAlign: "center" };
  const buttonStyle = {
    backgroundColor: "#ccffcc",
    borderColor: "#ccffcc",
    borderRadius: "5px",
    padding: "0.5rem",
  };
  return (
    <div style={getStyle}>
      <div>{props.children}</div>
      <div>
        <span>
          <h4>Name: {props.fullName}</h4>
        </span>
      </div>
      <div>
        <span>
          <h4>Bio: {props.bio}</h4>
        </span>
      </div>
      <div>
        <span>
          <h4>Profession: {props.profession}</h4>
        </span>
      </div>
      <button onClick={props.displayProfile} style={buttonStyle}>
        show profile
      </button>
    </div>
  );
};
export default Data;


