import React from 'react';
import './Cards.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hirer: this.props.job.hirer,
      tokenlancer: this.props.job.tokenlancer,
      applicationId: this.props.job.applicationId
    };
  }

  handleDelete = (event) => {
    // alert('A form was Deleteted: ' + this.state);
    // console.log(JSON.stringify(this.state))
    fetch('https://tokenlancer.uc.r.appspot.com/api/jobservice/tokenlancer', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state)
    })
      .then(function (response) {
        console.log(response)
        return response.json();
      });
  }

  render() {
    return (
      <div className='project' key={this.props.job.jobId}>
        <div className="project__bottom">
          <h3 style={{ textAlign: 'left' }} >{this.props.job.hirer}</h3>
          <h2>Status: {this.props.job.status}</h2>
          <div className='background'>
            <h3>{this.props.job.description}</h3> {/* Job description*/}
          </div>
          {/* <h4>Skills: {this.props.job.skills}</h4> */}
          <button class="bubbly-button button" onClick={this.handleDelete}> ❌Cancel </button>
        </div>
      </div>
    );
  }
}
export default Cards;