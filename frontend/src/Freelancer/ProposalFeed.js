import React from 'react';
// import './ProposalFeed.css';
import {Card} from './Card';
import { Search } from '../components/search/search';

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
    fetch(`https://tokenlancer.uc.r.appspot.com/api/accountservice/tokenlancer/all-jobs`, {
      method: 'GET',
      headers: {
        'secret-key': '$2b$10$NyrQqdB0SiEibAB3zubFUedM.YLf.HT5xbqMH4ZO9jXBC3zLpUauq'
      }
    })
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ jobs: user }))
  }

  render() {
    const { jobs, search } = this.state;
    const filterdJobs = jobs.filter(job => (job.title.toLowerCase().includes(search.toLowerCase())));
    return (
      <div className='ProposalFeed'>
        <Search placeholder='search jobs' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        {console.log(filterdJobs)}
        {console.log(this.state.filter)}
        {console.log(this.state.search)}
        <Card jobs={filterdJobs}></Card>
      </div>
    );
  }
}

export default ProposalFeed;

