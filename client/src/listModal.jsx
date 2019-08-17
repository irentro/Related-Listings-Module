import React from 'react';
import DetailsModal from './detailsModal.jsx';
import CreateList from './createList.jsx';
import styles from '../dist/style.css';

class ListModal extends React.Component {
  constructor(props) {
    super(props)
    this.state=({
      saved: false,
      formShow: false
    })
    this.handleCloseModal=this.handleCloseModal.bind(this);
    this.handleSaveToList=this.handleSaveToList.bind(this);
    this.handleToggleSave=this.handleToggleSave.bind(this);
    this.handleFormView=this.handleFormView.bind(this);
  }

  handleCloseModal() {
    this.props.closeModal();
  }

  handleFormView() {
    this.setState({
      formShow: !this.state.formShow
    })
  }

  handleToggleSave(e) {
    e.persist();
    this.setState({
      saved: !this.state.saved
    }, () => {
      this.handleSaveToList(e);
    })
  }

  handleSaveToList(e) {
    let obj = {
      id: e.target.getAttribute('idtag'),
      listName: e.target.getAttribute('listname')
    }

    this.state.saved ? this.props.saveToList(obj) : this.props.unSaveToList(obj);
  }
 
  render() {
    const favList = this.props.data.favoriteLists;
    const id = this.props.data.current;
    const listData = this.props.data.list;
    const record = [];

    // Find current list item obj and save to record
    for(var i = 0; i <listData.length; i++) {
      if(listData[i]._id === id) {
        record.push(listData[i]);
      }
    }

    return (
      <div>
        <div className={styles.modalSaveList}>
          <DetailsModal data={record}/>
          <div className={styles.modalWrapper}>
            <div 
              className={styles.iconXcontainer}
              onClick={this.handleCloseModal}>
              <img 
                className={styles.iconX} 
                src="https://rentro-icons.s3-us-west-1.amazonaws.com/icon-x.png"/>
            </div>
            <div className={styles.sectionHeader}>Save to list</div>
            <div className={styles.modalWrapperAutoflow}>
              <div className={styles.modalListInner}>
                <div className={styles.modalListWrapper}>
                  {this.state.formShow ? 
                  <CreateList 
                    formView={this.handleFormView}
                    updateList={this.props.updateList}/> :
                  <div 
                    className={styles.blueFont}
                    onClick={this.handleFormView}
                    >Create New List</div>}
                </div>
                <div>
                  {favList.map(item => 
                    <div 
                      key={item}
                      idtag={id}
                      listname={item}
                      className={styles.modalListWrapper}
                      onClick={this.handleToggleSave}>
                        <div 
                        idtag={id}
                        listname={item}
                        className={styles.modalFavlistEntry}>{item}
                        </div>
                        <div>
                          {record[0].favoriteList.includes(item) ?
                          (<img 
                            className={styles.iconHeartLine} 
                            src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-solid.png"
                            idtag={id}
                            listname={item}> 
                          </img>) : 
                          (<img 
                            className={styles.iconHeartLine}
                            src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-line.png"
                            idtag={id}
                            listname={item}>
                          </img>)}  
                        </div>
                    </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalBackground}></div>
      </div>
    )
  }
}

export default ListModal;