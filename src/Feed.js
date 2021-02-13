import React from 'react';
import './Feed.css';
import { ProjectList } from './components/ProjectList/ProjectList';
import { Search } from './components/search/search'

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/60274bc73b303d3d964fe63f/1', {
      method: 'GET',
      headers: {
        'secret-key': '$2b$10$m7Z.n9.aBJObcy8ZfKtQTey1aWzx9jxyMuijso7H2rIvuA3x4iWoG'
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
      <div className='Feed'>
        <Search placeholder='search jobs' onchange={(e) => (this.setState({ search: e.target.value }))}></Search>
        <ProjectList jobs={filterdJobs}></ProjectList>
      </div>
    );
  }
}

export default Feed;

