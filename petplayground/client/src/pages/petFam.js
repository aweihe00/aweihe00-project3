import React from "react";
import API from "../utils/API2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function randomComponent (props) {
    return <h1></h1>
}

class petFamily extends React.Component {
  state = {
      petName: "",
      nicknames: "",
      breed: "",
      birthday: new Date(),
      allergies: "", 
      temperament: "", 
      diet: "",
      directions: ""

  };

  submitData = () => {
    const petData = {
        name: this.state.petName,
        nicknames: this.state.nicknames,
        breed: this.state.breed, 
        birthday: this.state.birthday, 
        allergies: this.state.allergies, 
        temperament: this.state.temperament, 
        diet: this.state.diet, 
        directions: this.state.directions
    }
    console.log(petData)
    API.savePet(petData).then( data => {
      console.log(data)
    }   
    )


    console.log(petData);

  }

  handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
  }

  handleDateChange = date => {
    this.setState({
      birthday: date
    })
    console.log(this.state.birthday)
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label >Pet Name</label>
          <input
            name="petName"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.petName}
          />
          <label >Nicknames</label>
          <input
            name="nicknames"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.nicknames}
          />
          <label >Breed</label>
          <input
            name="breed"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.breed}
          />
          <label >Birthday</label>
          <DatePicker
            name="bday"
            className="form-control"
            onSelect={this.handleDateChange}
            selected={this.state.birthday}
          />
          <label >Allergies</label>
          <input
            name="allergies"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.allergies}
          />
          <label >Temperament</label>
          <input
            name="temperament"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.temperament}
          />
          <label >Diet</label>
          <input
            name="diet"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.diet}
          />
          <label >Directions</label>
          <textarea
            name="directions"
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.directions}
          />
        </div>
        <button onClick={this.submitData} type="submit">
          Submit Pet
        </button>
      </div>
    );
  }
}

export default petFamily;