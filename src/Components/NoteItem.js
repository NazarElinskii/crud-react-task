import React, { Component } from 'react'

export default class NoteItem extends Component {
  constructor(props){
    super(props);

    this.state={
      isEdit:false
    };
    
    this.Delete=this.Delete.bind(this);
    this.Edit=this.Edit.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
    
  }

  Delete(){
    const{Delete,id}=this.props;
    Delete(id);
  }

  Edit(){
    this.setState({isEdit:true})
  }

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.typeFromInput.value,this.valueFromInput.value, this.props.id);
    this.setState({isEdit:false});
  }

  render() {
    const {id,type,value}=this.props;
    return (
      <div key={id}>
        {
          this.state.isEdit ? (
            <form onSubmit={this.onEditSubmit}>
              <input ref={typeFromInput => this.typeFromInput = typeFromInput} defaultValue={type}/>
              <input ref={valueFromInput => this.valueFromInput = valueFromInput} defaultValue={value}/>
              <button>Save</button>
            </form>
          ):( 
            <div>
              <p>Type: {type} Value: {value} </p>
              <button onClick={this.Edit}>Edit</button>
              <button onClick={this.Delete}>Delete</button>
            </div>
          )
        }
      </div>
    )
  }
}
