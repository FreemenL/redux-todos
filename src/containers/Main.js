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


/*1
  此处的todos 默认会返回所有的todos 因为state.visibilityFilter 的默认值为SHOW_ALL

  当用户在 components/todos.js点击相应按钮时 会触发state.visibilityFilter 发生改变 

  之后通过getvisibilityFilter 函数的过滤 返回相应的 todos

*/ 
const mapStateToProps = (state) => ({
  todos: getvisibilityFilter(state.todos,state.visibilityFilter)
})


/*2
  mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。

  也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

  简单的解释  当该参数为对象时候 value值为一个函数  即此处的toggleTodo即为

   (id)=>({
      type:'TOGGLE_TODO',
      id
    })

  当用户点击该todo的时候 就会dispatch一个该函数的返回值 就是{type:'TOGGLE_TODO',id} reducer中 todos收到该参数后

  会执行TOGGLE_TODO分之并返回相信数据 也就触发了 上面mapStateToProps 中 todos的改变 compnents/todos.js  会根据completed属性

  显示相应的样式
*/ 

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


