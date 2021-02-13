import React from 'react';
import './PostJob.css';
import Menus from './Menus';

class PostProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description: '',
      skills:'',
      hours:'',
      tokensperhour:''
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
          <label>
            <h3>Choose a name for the Job</h3>
            <input type="text" value={this.state.value} name="title" onChange={this.handleChange} />
          </label>
          <label>
            <h3>Tell us more about the Job</h3>
            Start with a bit about yourself or your business, and include an overview of what you need done.
          <input type="text" value={this.state.value} name="description" onChange={this.handleChange} />
          </label>
          <label>
            <h3>What skills are required?</h3>
            Separate the skills using comma.<br></br> (eg: React, html, css)
          <input type="text" value={this.state.value} name="skills" onChange={this.handleChange} />
          </label>
          <label>
            <h3>What is your estimated time period?</h3>
            <input type="text" value={this.state.value} name="hours" onChange={this.handleChange} />
          </label>
          <label>
            <h3>What is your estimated Tokens per Hour?</h3>
            <input type="text" value={this.state.value} name="tokensperhour" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostProject;