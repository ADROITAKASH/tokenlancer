import React from 'react';
import './PostJob.css';
import Menus from './Menus';

class PostProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    }).then(function (response) {
      console.log(response)
      return response.json();
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menus />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostProject;