import { connect } from 'react-redux';
import TodoList from 'components/TodoList'
import {toggleTodo} from 'actions/Actions'


function getvisibilityFilter(todos,filter){
  switch(filter){
    case 'SHOW_ALL':
      console.log(todos);
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t=>t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t=>!t.completed);
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getvisibilityFilter(state.todos,state.visibilityFilter)
})


// const mapDispatchToProps=(dispatch,ownProps)=>{
//   return{
//     onTodoClick:(id)=>{
//       dispatch({
//         id,
//         type:'TOGGLE_TODO'
//       })
//     }
//   }
// }
const mapDispatchToProps={
  onTodoClick:toggleTodo
}


const Main = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default Main;
















































