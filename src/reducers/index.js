import { combineReducers } from 'redux'

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












