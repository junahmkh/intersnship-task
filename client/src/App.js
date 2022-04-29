import React from 'react'
import axios from 'axios';

import './App.css';

class App extends React.Component{
  state = {
    search: '',
    posts:[],
  };

  resetUserInputs = () => {
    this.setState({
      search: '',
    });
  };
  getAPI = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

 

  submit= (event) => {
    event.preventDefault();
    const payload = {
      search: this.state.search
    }

    this.getAPI(payload);
  };

  filterjson = (searchValue,posts)=> {
    return posts[0].entries.find(el => el.API === searchValue);
  }

  displayAPI = (posts) => {
    if (!posts.length) return null;
    
    let api = this.filterjson(this.state.search,posts);
    console.log(api);
    return (
      <div>
        <p>API : {api.API}</p>
        <p>Description : {api.Description}</p>
        <p>Link : {api.Link}</p>
        <p>Category : {api.Category}</p>
      </div>
    );
  };

  render(){
    console.log('state',this.state);
    //JSX
    return(
      <div className='app'>
        <h1>Search API</h1>
        <form onSubmit={this.submit}>
          <div className='form-input'>
            <input 
                type="text"
                name="search"
                placeholder="Search API"
                value={this.state.search}
                onChange={this.handleChange}
            />
          </div>
          <div>
            <button className='btn btn-block'>Search</button>
          </div>
        </form>
        <div className='display'>
          {this.displayAPI(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;