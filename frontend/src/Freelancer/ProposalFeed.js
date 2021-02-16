import React from 'react';
// import './ProposalFeed.css';
import { Card } from './Card';
import { Search } from '../components/search/search'
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
    fetch(`https://tokenlancer.uc.r.appspot.com/api/accountservice/${user_name}/tokenlancer/proposals`, {
      method: 'GET'
    })
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ jobs: user }))
  }

  render() {
    // console.log(user_name)
    const { jobs, search } = this.state;
    const filterdJobs = jobs.filter(job => (job.hirer.toLowerCase().includes(search.toLowerCase())));
    return (
      <div className='ProposalFeed' style={{ padding:' 3rem' }}>
        <Search placeholder='hirer' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        <Card jobs={filterdJobs}></Card>
      </div>
    );
  }
}

export default ProposalFeed;

