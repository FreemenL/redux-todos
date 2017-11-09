import React from 'react';
import {addTodo} from 'actions/Actions';
import {connect} from 'react-redux';

/*
  #从该组件开始编写此项目
  #addTodo 为smart组件 主要负责向store添加todo
*/ 

class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  } 
  handleChange(value,event){
    if(event.target.value.trim()!==''){
      this.setState({
        [value]:event.target.value
      })
    }
  }
  handleClick(value){
    if(this.state.text!==''){
      this.props.dispatch(addTodo(this.state.text));//此处的this.props.dispatch 就是connect把store.dispatch传进来的
      this.setState({
        [value]:''
      })
    }
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange.bind(this,'text')} value={this.state.text}/>
        <button onClick={this.handleClick.bind(this,'text')}>添加事件</button>
      </div>
    )   
  }
}

export default AddTodo = connect()(AddTodo);
/*
  connect为react-redux 提供的高阶函数

  就是说connect函数接受两个参数 mapStateToProps 和 mapDispatchToProps 并且它的返回值又是一个函数 而该函数接受一个组件作为参数 

  此处只传组件进去   则该组件默认获得操作 store 的 dispatch 方法 (在组件内部使用this.props.dispatch)

  原因是因为connect函数内部的逻辑为 如果不传 mapStateToProps 就让该组件的props属性指向store.dispatch 从而在组件内部获取操作store的权限

  而且可操作的是整个合并后的整个store 即reducer中 同过combineReducers合并的store

*/ 



