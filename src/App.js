import React from 'react';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component
{
  constructor (props)
  {
    super(props);
    this.state = {  //this.state here used for reading values not writing.
      newToDo: "", //Keep track of our new to-do value.
      toDos: []  //keep track of all the todos.
    };
  }
  //Add a new todo(see onSubmit in our form below)
  addToDO = (event)=>
   {
    event.preventDefault();
    //console.log("Test add todo!");
    //set upa new task.
    const newTask = {
      uniqueId: uuidv4(), //ensure a unique ID.
      value:this.state.newToDo  //Read current value.
    };
    console.log(newTask);  //check if new task is generating.

    //Create a clone of our toDos array, so we can make chnages before updating state.
    const currentToDoList =[...this.state.toDos]; ///... spread operater breaks up each value of array in comma separated values.

    currentToDoList.push(newTask); //Add our new task to the clone array.

    //Use setState to update any state date(never re-assign directly!)
    this.setState ({  //this is why we made a clone of the to do list, and update it before runing setState again.
      toDos: currentToDoList, //update todos
      newToDo: "" //Clear the "new to-do" field.
    }

    );
  }

  //We never re-assign the contents of this state.
  //When we need to update anything in state, we need to use this.setState()
  //this. setState() triggers the render() method, so that we can
  updateItem (key,value)
  {
    this.setState({[key]:value});
  }
  render()
  {
    return(

      <>
      <h1>React To-Do App</h1>
      <form onSubmit={this.addToDO}>
        <label htmlFor="newToDo">
          Enter a new "To-Do":
          <input type="text" name ="newToDo" 
          id="newToDo" required 
          value={this.state.newToDo}
          onChange={ event =>this.updateItem('newToDo', event.target.value)} />
        </label>
        <input type="submit" value="Add New To-Do"/>
      </form>
      <h2>Current To-Dos:</h2>
      <ul></ul>
      </>
    );

  }
}
export default App;
