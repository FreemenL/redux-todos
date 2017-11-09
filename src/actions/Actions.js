let countIndex = 0;

export const addTodo = (text)=>({
 id:countIndex++,
 text,
 type:'ADD_TODO'
})

export const toggleTodo=(id)=>({
  type:'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = (filter)=>({
    type:'SET_VISIBILITY_FILTER',
    filter
})




















