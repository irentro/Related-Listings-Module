import React from 'react';
import DetailsModal from './detailsModal.jsx';
import CreateList from './createList.jsx';

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
        <div className="modal-save-list">
          <DetailsModal data={record}/>
          <div className="modal-wrapper">
            <div 
              className="icon-x-container"
              onClick={this.handleCloseModal}>
              <img className="icon-x" src="./icon-x.png"/>
            </div>
            <div className="section-header">Save to list</div>
            <div className="modal-wrapper-autoflow">
              <div className="modal-list-inner">
                <div className="modal-list-wrapper">
                  {this.state.formShow ? 
                  <CreateList 
                    formView={this.handleFormView}
                    updateList={this.props.updateList}/> :
                  <div 
                    className="modal-create-list blue-font"
                    onClick={this.handleFormView}
                    >Create New List</div>}
                </div>
                <div>
                  {favList.map(item => 
                    <div 
                      key={item}
                      idtag={id}
                      listname={item}
                      className="modal-list-wrapper"
                      onClick={this.handleToggleSave}>
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
        </div>
        <div className="modal-background"></div>
      </div>
    )
  }
}

export default ListModal;