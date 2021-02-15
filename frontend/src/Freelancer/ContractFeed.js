import React from 'react';
// import './ContractFeed.css';
import {ConCard} from './ConCard';
import { Search } from '../components/search/search';

class ContractFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      search: '',
      filter: ''
    }
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/602a0e106b568373f8c1cb6e', {
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
      <div className='ContractFeed'>
        <Search placeholder='search jobs' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        {console.log(filterdJobs)}
        {console.log(this.state.filter)}
        {console.log(this.state.search)}
        <ConCard jobs={filterdJobs}></ConCard>
      </div>
    );
  }
}

export default ContractFeed;

