import React from 'react';
// import './ContractFeed.css';
import {ConCard} from './ConCard';
import { Search } from '../components/search/search';
import user_name from '../user_name'

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
    fetch(`https://tokenlancer.uc.r.appspot.com/api/accountservice/${user_name}/tokenlancer/contracts`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(user => this.setState({ jobs: user }))
  }

  render() {
    const { jobs, search } = this.state;
    const filterdJobs = jobs.filter(job => (job.hirer.toLowerCase().includes(search.toLowerCase())));
    return (
      <div className='ContractFeed'>
        <Search placeholder='hirer' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        <ConCard jobs={filterdJobs}></ConCard>
      </div>
    );
  }
}

export default ContractFeed;

