import React from 'react';
import './HiCards.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className='project' key={this.props.job.jobId}>
        <div className="project__bottom">
          <h3 style={{ textAlign: 'left' }} >{this.props.job.hirer}</h3> {/* name for hirer */}
          <h2 style={{ textAlign: 'center' }} >{this.props.job.title}</h2> {/* name for Job */}
          <h2>Status: {this.props.job.status}</h2> {/* name for Job */}
          <div className='background'>
            <h3>{this.props.job.description}</h3> {/* Job description*/}
          </div>
          <h4>Skills: {this.props.job.skills}</h4> {/* skills required */}
          <button class="bubbly-button button"> ❌Cancel </button>
        </div>
      </div>
    );
  }
}
export default Cards;