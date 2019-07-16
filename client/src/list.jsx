import React from 'react';
import styles from '../dist/style.css';

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
      <div className={styles.listContainer}>
        {this.props.data.list.map(item =>
          <div 
            className={styles.listItemWrapper}
            style={position}
            key={item._id}>
    
            <div 
              className={styles.heartClick}
              name={item._id}
              onClick={this.handleSelectItem}>
              {item.favoriteList.length > 0 ? 
                (<img 
                  className={styles.imgHeart}
                  name={item._id}
                  src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-filled.png"/>) : 
                (<img 
                  className={styles.imgHeart}
                  name={item._id}
                  src="https://rentro-icons.s3-us-west-1.amazonaws.com/heart-unfilled.png"/>)}
            </div>
            <img
              className={styles.listItemImage}
              src={item.imageUrl}        
            />

            <div 
              className={styles.listItemDetailWrapper}>
              <div className={styles.listItemCategory}>
                <div>
                  {item.roomType}
                </div>
                <div className={styles.listItemCity}>
                  {item.city}
                </div>
              </div>
              <div className={styles.listItemTitle}>
                {item.title}
              </div>
              <div className={styles.listItemPrice}>
                {`$${item.price}/night`}
              </div>
              <div className={styles.listItemReviewWrapper}>
                <div className={styles.listItemStarWrapper}>
                  <img 
                    className={styles.listItemStar} 
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                  <img 
                    className={styles.listItemStar}
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                  <img 
                    className={styles.listItemStar}
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                  <img 
                    className={styles.listItemStar} 
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                  <img 
                    className={styles.listItemStar} 
                    src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-filled.svg"/>
                </div>
                <div className={styles.listItemReviewCount}>
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