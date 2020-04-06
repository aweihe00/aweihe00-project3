import React from "react";
import "./petInfo.css";
import FileUpload from "../upload/fileUpload";

function PetInfo(props) {
  return (
    <div className="petInfoCont">
      <div className="container">
        <h1>Pet Info</h1>
      </div>
      <div className="jumbotron petInfoJumbo">
        <div className="col text-right petInfoImage"></div>
        <div className="col text-start">
          <p>Name:</p>
          <p>Nicknames:</p>
          <p>Birthday:</p>
          <p>Diet:</p>
          <p>Perscription:</p>
        </div>
      </div>
    </div>
  );
}

export default PetInfo;