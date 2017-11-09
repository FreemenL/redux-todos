import React,{Component}from 'react';
import AddTodo from 'containers/AddTodo';
import Footer from 'components/Footer';
import Main from 'containers/Main';


export default class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
      return(
        <div>
          <AddTodo/>
          <Main/>
          <Footer/>
        </div>
      )
    }
}