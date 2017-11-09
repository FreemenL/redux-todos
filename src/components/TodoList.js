import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
  constructor(props){
     super(props) 
  }
  render(){
    let { todos , onTodoClick} = this.props;
    return  (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={()=>onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }

}

export default TodoList





















