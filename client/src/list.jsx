import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log('list props', this.props.data)
    return(
      <div className="list-container">
        {this.props.data.map(item =>
          <div 
            className="list-item-wrapper"
            key={item._id}>
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
                <div>
                  {item.city}
                </div>
              </div>
              <div className="list-item-title">
                {item.title}
              </div>
              <div className="list-item-price">
                {`$${item.price}/night`}
              </div>
              <div className="list-item-reviewCount">
                {item.reviewCount}
              </div>
            </div>

          </div>
        )}
      </div>
    )
  }
}

export default List;