import React from 'react';
const axios = require('axios');
const faker = require('faker');
import List from './list.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list : [],
      position: 0
    }

    this.handleFetch = this.handleFetch.bind(this);
    this.handleCarouselMoveRight = this.handleCarouselMoveRight.bind(this);
    this.handleCarouselMoveLeft = this.handleCarouselMoveLeft.bind(this);
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
      })
      .catch((error) => {
        console.log('error fetching data', error);
      })
  }

  handleCarouselMoveRight() {

    if(this.state.position >= -2784) {
      this.setState({
        position: this.state.position - 348
      })
    }
  }

  handleCarouselMoveLeft() {
    if(this.state.position !== 0) {
      this.setState({
        position: this.state.position + 348
      })
    }
  }

  
  render() {
    return(
      <div 
        className="outter-container">
        <div 
          className="section-header">More places to stay
        </div>
        <div
          className="inner-container">
          <div 
            className="left-arrow">
            <img 
              className="img-arrow"
              src="./leftarrow.png"
              onClick={this.handleCarouselMoveLeft}/>        
          </div>
          <List data={this.state}/>
          <div 
            className="right-arrow">
            <img 
              className="img-arrow"
              src="./rightarrow.png"
              onClick={this.handleCarouselMoveRight}/>         
          </div>
        </div>
      </div>
    )
  }
}

export default App;