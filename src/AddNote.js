import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator'

export default class AddNote extends Component {
  constructor(props){
    super(props);
    this.validator = new SimpleReactValidator();
    this.onSubmit=this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.Add(this.typeFromInput.value,this.valueFromInput.value);
    this.typeFromInput.value='';
    this.valueFromInput.value='';
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <h3>Add note</h3>
          <input placeholder="type" ref={typeFromInput => this.typeFromInput = typeFromInput} />
          <input placeholder="value" ref={valueFromInput => this.valueFromInput = valueFromInput}/>
          <button>Add</button>
        </div>
      </form>


    )
  }
}
