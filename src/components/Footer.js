import FilterLink from 'containers/FilterLink';
import React,{ Component } from 'react';

class Footer extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <p>Show:
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    )
  }
}

export default Footer;




















