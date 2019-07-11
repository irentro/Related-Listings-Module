import React from 'react';

class ListModal extends React.Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    const favList = this.props.data.favoriteLists;
    const id = this.props.data.current;
    const listData = this.props.data.list;


    return(
      <div>
        <div className="modal-save-list">
          <div className="modal-header">Save to list</div>
          <div className="modal-list-inner">
            <div className="modal-create-list">Create New List</div>
            <div>
              {favList.map(item => 
                <div key={item}>{item}</div>)}
            </div>
          </div>
        </div>
        <div className="modal-background"></div>
      </div>

    )
  }
}

export default ListModal;