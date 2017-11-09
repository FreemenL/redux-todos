import { connect } from 'react-redux';
import Link from 'components/Link';
import {setVisibilityFilter} from 'actions/Actions';


/*  1
    mapStateToProps  此处active中 state.visibilityFilter 的值即为 reducers/index.js中 visibilityFilter 的返回值

    ownProps.filter 的值为components/Footer.js中filter的值  

    active用来响应用户的点击操作 即 点击该按钮时候 执行注释2 中的操作  

*/ 
const mapStateToProps = (state,ownProps)=>({
    active:state.visibilityFilter===ownProps.filter
})

/*2
  mapDispatchToProps 第一个参数dispatch为 createStore中返回的 dispatch   ownProps就是该组件的props属性  这里就是

  components/Footer.js中filter的值  当点击按钮之后执行dispatch  setVisibilityFilter(ownProps.filter)返回的值就是一个对象

  即{type:'SET_VISIBILITY_FILTER',filter} 此处的filter 就是传进去的 ownProps.filter    reducers/index.js 中visibilityFilter

  收到该参数后 也会把该filter返回  store发生变化后 在main.js中 的state.visibilityFilter 发生变化 返回相应的todos 重新渲染视图

  从而响应了用户的操作    
*/ 
const mapDispatchToProps = (dispatch,ownProps)=>({
  onClick:()=>{
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})


const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);


export default FilterLink;

