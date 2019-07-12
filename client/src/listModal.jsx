import React from 'react';
import DetailsModal from './detailsModal.jsx'

class ListModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleCloseModal=this.handleCloseModal.bind(this);
    this.handleSaveToList=this.handleSaveToList.bind(this);
  }


  handleCloseModal() {
    this.props.closeModal();
  }

  handleSaveToList(e) {
    let obj = {
      id: e.target.getAttribute('idtag'),
      listName: e.target.getAttribute('listname')
    }
    this.props.saveToList(obj)
  }
 
  render() {
    const favList = this.props.data.favoriteLists;
    const id = this.props.data.current;
    const listData = this.props.data.list;
    const record = [];
    // const saved = this.props.data.favoriteList;
     
    //Find current list item obj and save to record
    for(var i = 0; i <listData.length; i++) {
      if(listData[i]._id === id) {
        record.push(listData[i]);
      }
    }

    return(
      <div>
        <div className="modal-save-list">
          <DetailsModal data={record}/>
          <div className="modal-wrapper">
            <div 
              className="icon-x-container"
              onClick={this.handleCloseModal}>
              <img className="icon-x" src="./icon-x.png"/>
            </div>
            <div className="section-header">Save to list</div>
            <div className="modal-list-inner">
              <div className="modal-list-wrapper">
                <div 
                  className="modal-create-list blue-font"
                  >Create New List</div>
              </div>
              <div>
                {favList.map(item => 
                  <div 
                    key={item}
                    idtag={id}
                    listname={item}
                    className="modal-list-wrapper"
                    onClick={this.handleSaveToList}>
                      <div 
                      idtag={id}
                      listname={item}
                      className="modal-favlist-entry">{item}
                      </div>
                      <div>
                        {record[0].favoriteList.includes(item) ?
                        (<img 
                          className="icon-heart-line" 
                          src="./heart-solid.png"
                          idtag={id}
                          listname={item}>
                        </img>) : 
                        (<img 
                          className="icon-heart-line" 
                          src="./heart-line.png"
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
        <div className="modal-background"></div>
      </div>

    )
  }
}

export default ListModal;