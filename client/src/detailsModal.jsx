import React from 'react';
import DetailsBody from './detailsBody.jsx';
import styles from '../dist/style.css';

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
        className={styles.modalInnerWrapper}
        style={detailsPosition}>

          <div 
            className={styles.modalInnerHeaderContainer}
            onClick={this.handleMoveDetailsModal}>


            <div>
              {this.state.positionY ? 
                (<div className={styles.modalInnerHeaderCaret}>
                  <img className={styles.iconCaret} 
                  src="https://rentro-icons.s3-us-west-1.amazonaws.com/downarrow.png"/>
                </div>) : 
                (<div></div>
              )}
            </div>


            <div className={styles.modalInnerHeader}>
              <img 
                className={styles.modalInnerThumbnail} 
                src={this.props.data[0].imageUrl} />
              <div className={styles.modalInnerHeaderWrapper}>
                <div className={styles.modalInnerTitle}>{this.props.data[0].title}</div>
                <div className={styles.modalInnerLocation}>
                  <div 
                    className={styles.modalInnerLocationDetail}>
                    {`${this.props.data[0].city},`}</div>
                  <div
                    className={styles.modalInnerLocationDetail}>
                    {`${this.props.data[0].state},`}</div>
                  <div>{this.props.data[0].country}</div>
                </div>
                <div className={styles.listItemReviewWrapper}>
                  <div className={[styles.reviewsStarsWrapper]}>
                      <img 
                        className={styles.reviewsStar} 
                        src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-unfilled.svg"/>
                      <img 
                        className={styles.reviewsStar} 
                        src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-unfilled.svg"/>
                      <img 
                        className={styles.reviewsStar} 
                        src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-unfilled.svg"/>
                      <img 
                        className={styles.reviewsStar} 
                        src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-unfilled.svg"/>
                      <img 
                        className={styles.reviewsStar} 
                        src="https://rentro-icons.s3-us-west-1.amazonaws.com/star-unfilled.svg"/>
                    </div>
                  <div className={styles.modalInnerReviewcount}>{this.props.data[0].reviewCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DetailsBody details={this.props.data}/>
      </div>
    )
  }
}

export default DetailsModal;