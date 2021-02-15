import React from 'react';
import './PostJob.css';
import Menus from './Menus2';

class PostProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      skills: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    fetch('https://webhook.site/2491e7cf-0432-4f89-bd36-6c0d38cb0d57', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    })
      .then(function (response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menus />
        <h2>Tell us what you need done</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Choose a name for the Job</h3>

          <div className='material-textbox' id='title'>
            <input type="text" value={this.state.value} name="title" onChange={this.handleChange} required />
            <label>Price of hourly tokens</label>
          </div>


          <h3>Tell us more about the Job</h3>
          <h4>Start with a bit about yourself or your business, and include an overview of what you need done.</h4>

          <div className='material-textbox' id='description'>
            <input type="text" value={this.state.value} name="description" onChange={this.handleChange} required />
            <label>Approximate no. of hours to finish</label>
          </div>


          <h3>What skills are required?</h3>
          <h4>Separate the skills using comma.<br></br> (eg: React, html, css)</h4>

          <div className='material-textbox' id='skills'>
            <input type="text" value={this.state.value} name="skills" onChange={this.handleChange} required />
            <label>Tell me about yourself</label>
          </div>

          <input type="submit" value="Post" className='bubbly-button button' />
        </form>
      </div>
    );
  }
}

export default PostProject;