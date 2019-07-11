import React from 'react';
const axios = require('axios');
const faker = require('faker');
import List from './list.jsx';
import ListModal from './listModal.jsx'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list : [],
      position: 0,
      modal: false,
      current: 0,
      favoriteLists: ["Weekend Trip", "Getaway", "Dream Home"]
    }

    this.handleFetch = this.handleFetch.bind(this);
    this.handleCarouselMoveRight = this.handleCarouselMoveRight.bind(this);
    this.handleCarouselMoveLeft = this.handleCarouselMoveLeft.bind(this);
    this.handleUpdateModalView=this.handleUpdateModalView.bind(this);
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

  handleUpdateModalView(e) {
    this.setState({
      modal: !this.state.modal,
      current: e
    })
  }
  
  render() {
    const modalView = this.state.modal

    return(
      <div 
        className="outter-container">
        {modalView ? 
          (<ListModal 
            data={this.state}
            closeModal={this.handleUpdateModalView}/>) : console.log('modal turned off')}
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
          <List 
            data={this.state}
            modal={this.handleUpdateModalView}/>
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