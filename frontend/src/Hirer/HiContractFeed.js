import React from 'react';
import './HiContractFeed.css';
import {HiConCard} from './HiConCard';
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
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ jobs: user }))
  }

  render() {
    const { jobs, search } = this.state;
    const filterdJobs = jobs.filter(job => (job.tokenlancer.toLowerCase().includes(search.toLowerCase())));
    return (
      <div className='ContractFeed'>
        <Search placeholder='tokenlancer' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        <HiConCard jobs={filterdJobs}></HiConCard>
      </div>
    );
  }
}

export default ContractFeed;

