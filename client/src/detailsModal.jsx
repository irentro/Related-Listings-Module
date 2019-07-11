import React from 'react';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="modal-inner-wrapper">
        <div>
          <div className="modal-inner-header">
            <img 
              className="modal-inner-thumbnail" 
              src={this.props.data[0].imageUrl} />
            <div className="modal-inner-header-wrapper">
              <div className="modal-inner-title">{this.props.data[0].title}</div>
              <div className="modal-inner-location">
                <div>{`${this.props.data[0].city},  `}</div>
                <div>{`${this.props.data[0].state},  `}</div>
                <div>{this.props.data[0].country}</div>
              </div>
              <div>{this.props.data[0].reviewCount}</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default DetailsModal;