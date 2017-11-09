import React,{ Component } from 'react';

class Link extends Component{
  constructor(props){
    super(props)     
  }
  render(){
    let ele;
    let { active,onClick,children} = this.props;
    if(!active){
      ele=(<a href="#" onClick={(e)=>{e.preventDefault();onClick()}}>{children}</a>)
    }else{
      ele=(<span>{children}</span>)
    }
    return(
      ele
    )
  }
}

export default Link;



































