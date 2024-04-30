import Home from './Components/home'
import * as React from 'react';
import About from './Components/about'
import 'bootstrap/dist/css/bootstrap.css';
// import Home from './components/Home';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      view:true,
      input:"",
    }

  }
  
 
  render(){
  return (
    <div>
      <Home />

    </div>
  );
}}
export default App;
