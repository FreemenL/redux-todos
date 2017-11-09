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


/*
    Action 是一个对象。其中的type属性是必须的，表示 Action 的名称,reducer便是根据type属性来执行相应的操作 其他属性可以自由设置。

    redux的核心 就是说用户不能直接去操作store 必须由action来完成这个任务     流程就是由view触发action 再由action去 操作store  当store改变时

    就会触发view 的从新渲染 
*/ 

















