import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showComputerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computer: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/computers/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showcomputerDetails-API-response: " + res.data);
        this.setState({
          computer: res.data
        })
      })
      .catch(err => {
        console.log("Error from showComputerDetails");
      })
  };


   onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/computers/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form showComputerDetails");
      })
  };


  render() {

    const computer = this.state.computer;
    let computerItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ computer.model_name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ computer.company_name }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ computer.description }</td>
          </tr>
          
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowcomputerDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show computer List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">computer's Record</h1>
              <p className="lead text-center">
                  View computer's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { computerItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button"  onClick={this.onDeleteClick.bind(this,computer._id)}><img src="/del.png" /></button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-computer/${computer._id}`}  ><img src="/edit.png" /></Link>
              <br />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default showComputerDetails;