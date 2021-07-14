import React from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookForm from './components/BookForm';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends React.Component {

  render(){
    
    return (
      <div className="App">

        <Router>


          <NavBar />

          <br/>
          <br/>

          <Login/>
          
          <Signup/>
        

          <BookForm/>

          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/books" component={Books}/>
            <Route path="/myStuff" component={MyStuff}/> */}
            <Route path="/about" component={About}/>
          </Switch>

          <Footer />

        </Router>
  
      </div>
    );
  }

}

export default App;