import React from 'react';
// import './ConCards.css';

class HiConCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hirer: this.props.job.hirer,
      tokenlancer: this.props.job.tokenlancer,
      tokens: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.tokens)
  }

  handleTokens = (event) => {
    // alert('A form was Deleteted: ' + this.state);
    // console.log(JSON.stringify(this.state))
    fetch('https://tokenlancer.uc.r.appspot.com/api/jobservice/hirer/buy-more-tokens', {
      method: 'POST',
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
    event.preventDefault();
  }

  handleComplete = (event) => {
    // alert('A form was Deleteted: ' + this.state);
    // console.log(JSON.stringify(this.state))
    fetch('https://tokenlancer.uc.r.appspot.com/api/jobservice/hirer/complete-jobs', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({
        jobId: this.props.job.jobId,
        applicationId: this.props.job.applicationId,
        hirer: this.props.job.hirer,
        tokenlancer: this.props.job.tokenlancer
      })
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
          <h3 style={{ textAlign: 'left' }} >{this.props.job.hirer}</h3> {/* name for hirer */}
          <h2>Status: {this.props.job.status}</h2> {/* name for Job */}
          <div className='background'>
            <h3>{this.props.job.description}</h3> {/* Job description*/}
          </div>
          <h3 style={{ fontWeight: "600", fontSize: "15px" }}>Total Hrs : {this.props.job.totalHours}</h3>
          <h3 style={{ fontWeight: "600", fontSize: "15px" }}>Tokens Per Hour : {this.props.job.tokensPerHour}</h3>
          <div className='contain'>
            <form className='combined'>
              <div className='material-textbox' id='title'>
                <input className='small_' type="text" value={this.state.value} name="tokens" onChange={this.handleChange} required />
                <label className='small'>Buy Tokens</label>
              </div>
            </form>
            <div className='buttons'>
              <button className="bubbly-button button" onClick={this.handleTokens}> Buy Tokens</button>
              <button className="bubbly-button button" onClick={this.handleComplete}> Complete </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default HiConCards;