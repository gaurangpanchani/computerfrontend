import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ComputerCard from './ComputerCard';


class ShowComputerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/computers')
      .then(res => {
        this.setState({
          computers: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowComputerList');
      })
  };


  render() {
    const computers = this.state.computers;
    console.log("PrintComputer in showComputerList js: " + computers);
    let computerList;

    if(!computers) {
      computerList = "there is no book record!";
    } else {
      computerList = computers.map((computer, k) =>
        <ComputerCard computer={computer} key={k} />
      );
    }

    return (
      <div className="ShowComputerList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Computers List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-computer" className="btn btn-outline-warning float-right">
                + Add New Computer
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {computerList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowComputerList;