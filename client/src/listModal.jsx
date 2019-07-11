import React from 'react';
import DetailsModal from './detailsModal.jsx'

class ListModal extends React.Component {
  constructor(props) {
    super(props)

    this.handleCloseModal=this.handleCloseModal.bind(this);
  }


  handleCloseModal() {
    this.props.closeModal();
  }
 
  render() {
    const favList = this.props.data.favoriteLists;
    const id = this.props.data.current;
    const listData = this.props.data.list;

    return(
      <div>
        <div className="modal-save-list">
          <DetailsModal />
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
                  className="modal-list-wrapper">
                    <div className="modal-favlist-entry">{item}</div>
                    <div>
                      <img 
                        className="icon-heart-line" 
                        src="./heart-line.png"/>
                    </div>
                </div>
                )}
            </div>
          </div>
        </div>
        <div className="modal-background"></div>
      </div>

    )
  }
}

export default ListModal;