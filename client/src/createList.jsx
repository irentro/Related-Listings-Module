import React from 'react';

class CreateList extends React.Component {
  constructor() {
    super()

    this.state = ({
      formShow: true
    })

    this.handleToggleFormView=this.handleToggleFormView.bind(this);
  }

  handleToggleFormView () {
    this.props.formView()
  }
  

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-title">Name</div>
        <form>
          <input className="form-field" type="text"></input>
          <br></br>
          <input 
            type="submit" 
            className="form-create" 
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