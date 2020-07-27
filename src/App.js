import React from 'react';


class App extends React.Component
{
  constructor (props)
  {
    super(props);
    this.state = {
      newToDo: "", //Keep track of our new to-do value.
      toDos: []  //keep track of all the todos.
    };
  }

  addToDO(event)
   {
    event.preventDefault();
    console.log("Test add todo!");
  }
  render()
  {
    return(

      <>
      <h1>React To-Do App</h1>
      <form onSubmit={this.addToDO}>
        <label htmlFor="newToDo">
          Enter a new "To-Do:"
          <input type="text" name ="newToDo" id="newToDo" required />
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
