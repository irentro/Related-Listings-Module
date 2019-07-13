import React from 'react';

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
      <div className="form-wrapper">
        <div className="form-title">Name</div>
        <form>
          <input 
            className="form-field" 
            type="search"
            onChange={this.handleFormValue}
            onKeyDown={this.handleInput}
            value={this.state.formValue}></input>
          <br></br>
          <input 
            type="submit" 
            className="form-create"
            onClick={this.handleCreateClick} 
            value="Create">
          </input>
          <input 
            type="submit" 
            className="form-cancel" 
            onClick={this.handleToggleFormView}
            value="Cancel" >
          </input>
        </form>
      </div>
    )
  }
}

export default CreateList;