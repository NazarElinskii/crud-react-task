import React, { Component } from 'react'
import NoteItem from './Components/NoteItem'
import AddNote from './AddNote'

const notes=[
  {
    id:1,
    type:"String",
    value:"Lorem ipsum"
  },
  {
    id:2,
    type:"Number",
    value:42
  },
  {
    id:3,
    type:"String",
    value:"Dolo sit amet"
  }
];

localStorage.setItem('notes',JSON.stringify(notes));

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes:JSON.parse(localStorage.getItem('notes'))
    };

    this.Add=this.Add.bind(this);
    this.Delete=this.Delete.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const notes = this.getNotes();
    this.setState({notes});
  }

  getNotes(){
    return this.state.notes;
  }

  Add(type,value,id){
    const notes= this.getNotes();
    notes.push({
      type,
      value,
      id
    });

    this.setState({notes});
  }

  onEditSubmit(type,value,currentId){
    let notes=this.getNotes();
    notes = notes.map(note => {
      if(note.id === currentId){
        note.type=type;
        note.value=value;
      }
      return note;
    });
    this.setState({notes});
  }

  Delete(id){
    const notes = this.getNotes();
    const remainingNotes=notes.filter(note=>{
      return note.id!==id
    })

    this.setState({
      notes:remainingNotes
    })
  }

  

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <AddNote
          Add={this.Add}
        />
        {
          this.state.notes.map((notes)=>{
            return(
              <NoteItem 
                key={notes.id}
                {...notes}
                Delete={this.Delete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        }
      </div>
    )
  }
}

