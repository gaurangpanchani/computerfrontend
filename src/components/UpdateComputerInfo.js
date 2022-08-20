
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateComputerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model_name: '',
      company_name:'',
      color:'',
      description:'',
      manufacture_date:'',
      warrenty_period:''
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params);
    axios
      .get('http://localhost:8082/api/computers/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          model_name: res.data.model_name,
          company_name: res.data.company_name,
          color: res.data.color,
          description: res.data.description,
          manufacture_date: res.data.manufacture_date,
          warrenty_period: res.data.warrenty_period
        })
      })
      .catch(err => {
        console.log("Error from Update Computer Info");
      })
  };

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
      warrenty_period: this.state.warrenty_period,
      updated_date: Date.now()
    };

    axios
      .put('http://localhost:8082/api/computers/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-computer/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error from Update Computer Info!");
      })
  };


  render() {
    //alert('render');
    return (
      <div className="UpdateComputerInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Computer List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Computer</h1>
              <p className="lead text-center">
                  Update Computer's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Model Name</label>
              <input
                type='text'
                placeholder='Title of the Computer'
                name='model_name'
                className='form-control'
                value={this.state.model_name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Company Name</label>
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
            <label htmlFor="author">Color</label>
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
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Manufacture Date</label>
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
            <label htmlFor="publisher">Warrenty Period</label>
              <input
                type='text'
                placeholder='Warrenty Period'
                name='warrenty_period'
                className='form-control'
                value={this.state.warrenty_period}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Computer</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateComputerInfo;