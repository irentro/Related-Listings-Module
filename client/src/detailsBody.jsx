import React from 'react';

class DetailsBody extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <div className="modal-inner-section">
          <div className="modal-inner-title">About this listing</div>
          <div className="modal-inner-p">{this.props.details[0].about}</div>
        </div>
        <div className="modal-inner-section">
          <div className="modal-inner-title">The space</div>
          <div className="modal-inner-p">{this.props.details[0].space}</div>
        </div>
        <div className="modal-inner-section">
          <div className="modal-inner-title"> Neighborhod</div>
          <div className="modal-inner-p">{this.props.details[0].neighborhood}</div>
        </div>
        <div className="modal-inner-section">
          <div className="modal-inner-title">Reviews</div>
          <div className="modal-inner-review-div">
            {this.props.details[0].reviews.map(item =>
              <div 
                key={item.name}
                className="review-section">
                  <div className="review-name">{item.name}</div>
                  <div className="review-date">{item.date}</div>
                  <div className="review-comment">{item.comment}</div>
              </div>)}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsBody;