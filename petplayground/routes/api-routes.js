import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrescriptionFile from "../components/PrescriptionFile/prescriptionFile";
import axios from "axios";
class PrescriptionsPage extends Component {
  state = {
    prescriptions: [
          ]
  };
  componentDidMount() {
    this.loadPrescriptions();
  }
  loadPrescriptions = () => {
    let currentComponent = this;
    axios.get("/api/...").then(function(res) {
      currentComponent.setState({
        prescriptions: res.data
      });
    });
  };
  render() {
    return (
      <div className="Prescriptions">
        <div className="row">
          <div className="col-9">
            <h2>Prescriptions</h2>
          </div>
          <div className="col-3 text-right">
            <Link
              to="/prescription/addDetail"
              className="btn btn-primary btn-lg"
            >
              Add New Prescription
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.state.prescriptions < 1 ? (
              <div className="alert alert-warning mt-4" role="alert">
                This pet doesn't have prescriptions
              </div>
            ) : null}
            {this.state.prescriptions.map(item => (
              <PrescriptionFile
                key={item.id}
                url={item.url}
                title={item.title}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PrescriptionsPage;