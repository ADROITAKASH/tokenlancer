import React from 'react';
import './HiCards.css';

class HiCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: this.props.job.jobId,
      applicationId: this.props.job.applicationId,
      hirer: this.props.job.hirer,
      tokenlancer: this.props.job.tokenlancer,
      tokens: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.tokens)
  }

  handleAccept = (event) => {
    // alert('A form was Deleteted: ' + this.state);
    console.log(JSON.stringify(this.state))
    fetch('https://tokenlancer.uc.r.appspot.com/api/jobservice/hirer/accept-applications', {
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
      <div className='project' key={this.props.job.jobId}>
        <div className="project__bottom">
          <h3 style={{ textAlign: 'left' }} >{this.props.job.hirer}</h3> {/* name for hirer */}
          <h2>Status: {this.props.job.status}</h2> {/* name for Job */}
          <div className='background'>
            <h3>{this.props.job.description}</h3> {/* Job description*/}
          </div>
          <form className='form' onSubmit={this.handleAccept}>
            <div className='material-textbox' id='title'>
              <input type="text" value={this.state.value} name="tokens" onChange={this.handleChange} required />
              <label>No. Of Tokens to Buy</label>
            </div>
            <input type="submit" value="Accept" className='bubbly-button button top' />
          </form>
        </div>
      </div>
    );
  }
}
export default HiCards;