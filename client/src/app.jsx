import React from 'react';
const axios = require('axios');
const faker = require('faker');
import List from './list.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list : []
    }

    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch() {
    axios.get('http://127.0.0.1:4001/recommendations')
      .then((response) => {
        let startIndex = faker.random.number({min:0, max:88});
        let listArr = response.data.slice(startIndex, startIndex + 12)

        this.setState({
          list: listArr
        })
        // console.log(this.state.list)
      })
      .catch((error) => {
        console.log('error fetching data', error);
      })

  }

  render() {
    return(
      <div 
        className="outter-container">
        <div 
          className="section-header">More places to stay
        </div>
        <div></div>
        <List data={this.state.list}/>
      </div>
    )
  }
}

export default App;