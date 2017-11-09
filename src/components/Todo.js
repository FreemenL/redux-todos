import React,{Component} from 'react'


class Todo extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let { text , completed ,onClick} = this.props;
    return( 
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    )
  }
}
export default Todo
