import React from 'react';
import styles from '../dist/style.css';

class CreateList extends React.Component {
  constructor() {
    super()

    this.state = ({
      formShow: true,
      formValue: '',
    })

    this.handleToggleFormView=this.handleToggleFormView.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.handleFormValue=this.handleFormValue.bind(this);
    this.handleCreateClick=this.handleCreateClick.bind(this);
  }

  handleToggleFormView() {
    this.props.formView();
  }
 
  handleFormValue(e) {
    e.preventDefault();
    this.setState({
      formValue: e.target.value
    });  
  }

  handleInput(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      this.props.updateList(this.state.formValue);
      this.handleToggleFormView();
    }
  }

  handleCreateClick(e) {
    e.preventDefault();
    this.props.updateList(this.state.formValue);
    this.handleToggleFormView();
  }
  
  render() {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.formTitle}>Name</div>
        <form>
          <input 
            className={styles.formField}
            type="search"
            onChange={this.handleFormValue}
            onKeyDown={this.handleInput}
            value={this.state.formValue}></input>
          <br></br>
          <input 
            type="submit" 
            className={styles.formCreate}
            onClick={this.handleCreateClick} 
            value="Create">
          </input>
          <input 
            type="submit" 
            className={styles.formCancel}
            onClick={this.handleToggleFormView}
            value="Cancel" >
          </input>
        </form>
      </div>
    )
  }
}

export default CreateList;