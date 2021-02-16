import React from 'react';
// import './HiProposalFeed.css';
import {HiCard} from './HiCard';
import { Search } from '../components/search/search';
import user_name from '../user_name'

class ProposalFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      search: '',
      filter: ''
    }
  }

  componentDidMount() {
    fetch(`https://tokenlancer.uc.r.appspot.com/api/accountservice/${user_name}/hirer/proposals`, {
      method: 'GET'
    })
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ jobs: user }))
  }

  render() {
    const { jobs, search } = this.state;
    const filterdJobs = jobs.filter(job => (job.tokenlancer.toLowerCase().includes(search.toLowerCase())));
    return (
      <div className='ProposalFeed' style={{ padding: ' 3rem' }}>
        <Search placeholder='tokenlancer' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        <HiCard jobs={filterdJobs}></HiCard>
      </div>
    );
  }
}

export default ProposalFeed;

