import React from 'react';
import styles from '../dist/style.css';

class DetailsBody extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <div className={styles.modalInnerSection}>
          <div className={styles.modalInnerTitle}>About this listing</div>
          <div className={styles.modalInnerP}>{this.props.details[0].about}</div>
        </div>
        <div className={styles.modalInnerSection}>
          <div className={styles.modalInnerTitle}>The space</div>
          <div className={styles.modalInnerP}>{this.props.details[0].space}</div>
        </div>
        <div className={styles.modalInnerSection}>
          <div className={styles.modalInnerTitle}> Neighborhod</div>
          <div className={styles.modalInnerP}>{this.props.details[0].neighborhood}</div>
        </div>
        <div className={styles.modalInnerSection}>
          <div className={styles.modalInnerTitle}>Reviews</div>
          <div className={styles.modalInnerReviewDiv}>
            {this.props.details[0].reviews.map(item =>
              <div 
                key={item.name}
                className={styles.reviewSection}>
                  <div className={styles.reviewName}>{item.name}</div>
                  <div className={styles.reviewDate}>{item.date}</div>
                  <div className={styles.reviewComment}>{item.comment}</div>
              </div>)}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsBody;