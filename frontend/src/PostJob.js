import React from 'react';
import './PostJob.css';
import Menus from './Menus2';
import user_name from './user_name'

class PostProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hirer: user_name,
      title: '',
      description: '',
      skills: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    // alert('A form was submitted: ' + this.state);
    console.log(JSON.stringify(this.state))
    fetch('https://tokenlancer.uc.r.appspot.com/api/jobservice/hirer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
        <div className='pad-top'>
          <h2 className='left'>what you need done</h2>
          <form className='form' onSubmit={this.handleSubmit}>
            <h3>Choose a name for the Job</h3>

            <div className='material-textbox' id='title'>
              <input type="text" value={this.state.value} name="title" onChange={this.handleChange} required />
              <label>Job name</label>
            </div>


            <h3 className='pad'>Tell us more about the Job</h3>
            <h6>Start with a bit about yourself or your business, and include an overview of what you need done.</h6>

            <div className='material-textbox' id='description'>
              <input type="text" value={this.state.value} name="description" onChange={this.handleChange} required />
              <label>Job description</label>
            </div>


            <h3 className='pad'>What skills are required?</h3>
            <h6>Separate the skills using comma.<br></br> (eg: React, html, css)</h6>

            <div className='material-textbox className=' pad id='skills'>
              <input type="text" value={this.state.value} name="skills" onChange={this.handleChange} required />
              <label>Skills required</label>
            </div>

            <input type="submit" value="Post" className='bubbly-button button bot' />
          </form>
        </div>

      </div>
    );
  }
}

export default PostProject;