import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateComputer extends Component {
  constructor() {
    super();
    this.state = {
      model_name: '',
      company_name:'',
      color:'',
      description:'',
      manufacture_date:'',
      warrenty_period:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      model_name: this.state.model_name,
      company_name: this.state.company_name,
      color: this.state.color,
      description: this.state.description,
      manufacture_date: this.state.manufacture_date,
      warrenty_period: this.state.warrenty_period
    };

    axios
      .post('http://localhost:8082/api/computers', data)
      .then(res => {
        this.setState({
          model_name: '',
          company_name:'',
          color:'',
          description:'',
          manufacture_date:'',
          warrenty_period:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Create Computer!");
      })
  };

  render() {
    return (
      <div className="CreateComputer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Computer List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Computer</h1>
              <p className="lead text-center">
                  Create new Computer
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Model of the Computer'
                    name='model_name'
                    className='form-control'
                    value={this.state.model_name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Company Name'
                    name='company_name'
                    className='form-control'
                    value={this.state.company_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='color'
                    name='color'
                    className='form-control'
                    value={this.state.color}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this computer'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='manufacture_date'
                    name='manufacture_date'
                    className='form-control'
                    value={this.state.manufacture_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Warrenty Period'
                    name='warrenty_period'
                    className='form-control'
                    value={this.state.warrenty_period}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateComputer;