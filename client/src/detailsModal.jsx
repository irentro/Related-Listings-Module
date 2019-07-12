import React from 'react';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      positionY: false
    }

    this.handleMoveDetailsModal=this.handleMoveDetailsModal.bind(this)
  }

  handleMoveDetailsModal() {
    this.setState({
      positionY: !this.state.positionY
    })
    console.log('positinY', this.state.positionY)
  }

  render() {
    const y = this.state.positionY ? 0 : 468;

    const detailsPosition = {
      transition: `0.5s`,
      transform: `translateY(${y}px)`
    }

    return(

      <div 
        className="modal-inner-wrapper"
        style={detailsPosition}>

          <div 
            className="modal-inner-header-container"
            onClick={this.handleMoveDetailsModal}>


            <div>
              {this.state.positionY ? 
                (<div className="modal-inner-header-caret">
                  <img className="icon-caret" 
                  src="./downarrow.png"/>
                </div>) : 
                (<div></div>
              )}
            </div>


            <div className="modal-inner-header">
              <img 
                className="modal-inner-thumbnail" 
                src={this.props.data[0].imageUrl} />
              <div className="modal-inner-header-wrapper">
                <div className="modal-inner-title">{this.props.data[0].title}</div>
                <div className="modal-inner-location">
                  <div 
                    className="modal-inner-location-detail">
                    {`${this.props.data[0].city},`}</div>
                  <div
                    className="modal-inner-location-detail">
                    {`${this.props.data[0].state},`}</div>
                  <div>{this.props.data[0].country}</div>
                </div>
                <div className="list-item-review-wrapper">
                  <div className="list-item-star-wrapper reviews-stars-wrapper">
                      <img 
                        className="list-item-star reviews-star" 
                        src="./star-filled.svg"/>
                      <img 
                        className="list-item-star reviews-star" 
                        src="./star-filled.svg"/>
                      <img 
                        className="list-item-star reviews-star" 
                        src="./star-filled.svg"/>
                      <img 
                        className="list-item-star reviews-star" 
                        src="./star-filled.svg"/>
                      <img 
                        className="list-item-star reviews-star" 
                        src="./star-filled.svg"/>
                    </div>
                  <div className="modal-inner-reviewcount">{this.props.data[0].reviewCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modal-inner-section">
            <div className="modal-inner-title">About this listing</div>
            <div className="modal-inner-p">{this.props.data[0].about}</div>
          </div>
          <div className="modal-inner-section">
            <div className="modal-inner-title">The space</div>
            <div className="modal-inner-p">{this.props.data[0].space}</div>
          </div>
          <div className="modal-inner-section">
            <div className="modal-inner-title"> Neighborhod</div>
            <div className="modal-inner-p">{this.props.data[0].neighborhood}</div>
          </div>
          <div className="modal-inner-section">
            <div className="modal-inner-title">Reviews</div>
            <div>
              {this.props.data[0].reviews.map(item =>
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

export default DetailsModal;