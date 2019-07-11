import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleSelectItem(e) {
    this.props.modal(e.target.getAttribute('name'));
  }

  render() {
    const x = this.props.data.position;
    const position = {
      transition: `0.5s`,
      transform: `translateX(${x}px)`
    }

    return(
      <div className="list-container">
        {this.props.data.list.map(item =>
          <div 
            className="list-item-wrapper"
            style={position}
            key={item._id}>
            <div 
              className="heart-click"
              name={item._id}
              onClick={this.handleSelectItem}>
              <img 
                className="img-heart"
                name={item._id}
                src="./heart-unfilled.png"/>
            </div>
            <img
              className="list-item-image"
              src={item.imageUrl}        
            />

            <div 
              className="list-item-detail-wrapper">
              <div className="list-item-category">
                <div>
                  {item.roomType}
                </div>
                <div className="list-item-city">
                  {item.city}
                </div>
              </div>
              <div className="list-item-title">
                {item.title}
              </div>
              <div className="list-item-price">
                {`$${item.price}/night`}
              </div>
              <div className="list-item-review-wrapper">
                <div className="list-item-star-wrapper">
                  <img 
                    className="list-item-star" 
                    src="./star-filled.svg"/>
                  <img 
                    className="list-item-star" 
                    src="./star-filled.svg"/>
                  <img 
                    className="list-item-star" 
                    src="./star-filled.svg"/>
                  <img 
                    className="list-item-star" 
                    src="./star-filled.svg"/>
                  <img 
                    className="list-item-star" 
                    src="./star-filled.svg"/>
                </div>
                <div className="list-item-reviewCount">
                  {item.reviewCount}
                </div>

              </div>
            </div>

          </div>
        )}
      </div>
    )
  }
}

export default List;