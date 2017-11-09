import { combineReducers } from 'redux'
/*
  reducer 为整个应用的module层   提供数据和操作数据的方法

  由于复杂的应用可能有多个reducer  combineReducers 用来合并他们 
  
*/ 

let initialStgate=[{
  id: -1,
  text: 'ues-redux',
  completed: true
}]
const todos = (state = initialStgate, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        if(todo.id==action.id){
          return {...todo,completed:!todo.completed}
        }else{
          return todo
        }
      })
    default:
      return state
  }
}
const visibilityFilter = (state='SHOW_ALL',action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
}
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;












