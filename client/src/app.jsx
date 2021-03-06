import React from 'react';
import axios from 'axios';
import faker from 'faker';
import List from './list.jsx';
import ListModal from './listModal.jsx';
import styles from '../dist/style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      list : [],
      position: 0,
      modal: false,
      current: 0,
      favoriteLists: ["Weekend Trip", "Getaway", "Dream Home"],
    }
    this.handleFetch = this.handleFetch.bind(this);
    this.handleCarouselMoveRight = this.handleCarouselMoveRight.bind(this);
    this.handleCarouselMoveLeft = this.handleCarouselMoveLeft.bind(this);
    this.handleUpdateModalView=this.handleUpdateModalView.bind(this);
    this.handleSave=this.handleSave.bind(this);
    this.handlePostFetch=this.handlePostFetch.bind(this);
    this.handleUnSave=this.handleUnSave.bind(this);
    this.handleUpdateList=this.handleUpdateList.bind(this);
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch() {
    axios.get('/recommendations')
      .then((response) => {
        
        let startIndex = faker.random.number({min:0, max:88});
        let listArr = response.data.slice(startIndex, startIndex + 12)

        this.setState({
          index: startIndex,
          list: listArr
        }, () => {
          console.log('Fetch State', this.state)
        })
      })
      .catch((error) => {
        console.log('error fetching data', error);
      })
  }
 
  handlePostFetch() {
    axios.get('/recommendations')
    .then((response) => {
      
      let startIndex = this.state.index;
      let listArr = response.data.slice(startIndex, startIndex + 12)
      console.log('listArr', listArr)
      this.setState({
        list: listArr
      }, () => {
        console.log('Fetch State', this.state)
      })
    })
    .catch((error) => {
      console.log('error fetching data', error);
    })   
  }

  handleSave(value) {
    axios.post('/recommendations/save', value)
    .then((response) => {
      this.handlePostFetch()
    })
    .catch(function (error) {
      console.log('handelSave', error);
    });
  }

  handleUnSave(value) {
    axios.post('/recommendations/unsave', value)
    .then((response) => {
      this.handlePostFetch()
    })
    .catch(function (error) {
      console.log('handleUnSave', error);
    });
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

  handleUpdateList (value) {
    this.state.favoriteLists.unshift(value);
    let newList = this.state.favoriteLists;
    this.setState({
      favoriteLists: newList
    })
  }
  
  render() {
    const modalView = this.state.modal
    return(
      <div 
        className={styles.outterContainer}>
        {modalView ? 
          (<ListModal 
            data={this.state}
            saveToList={this.handleSave}
            unSaveToList={this.handleUnSave}
            updateList={this.handleUpdateList}
            closeModal={this.handleUpdateModalView}/>) : <div></div>}
        {/* <div className={styles.sectionHeadSpacer}></div> */}
        <div 
          className={styles.sectionHeader}>More places to stay
        </div>
        <div
          className={styles.innerContainer}>
          <div 
            className={styles.leftArrow}>
            <img 
              className={styles.imgArrow}
              src="https://rentro-icons.s3-us-west-1.amazonaws.com/leftarrow.png"
              onClick={this.handleCarouselMoveLeft}/>        
          </div>
          <List 
            data={this.state}
            modal={this.handleUpdateModalView}/>
          <div 
            className={styles.rightArrow}>
            <img 
              className={styles.imgArrow}
              src="https://rentro-icons.s3-us-west-1.amazonaws.com/rightarrow.png"
              onClick={this.handleCarouselMoveRight}/>         
          </div>
        </div>
      </div>
    )
  }
}

export default App;