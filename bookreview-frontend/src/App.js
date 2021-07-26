import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookForm from './components/BookForm';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { getAllBooks } from './actions/books';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  // componentDidMount(){
  //   this.props.getAllBooks();
  // }

  render(){

    let loggedIn = this.props.booksReducer.currentUser.username
    
    return (
      <div className="App">

        <Router>

          <NavBar />
          
          <h3>Book Review!</h3>
       
         { loggedIn ? <Logout/> : <div> <Login/> <Signup/> </div>}
        
         { loggedIn ? <BookForm/> : ""}

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

const mapStateToProps = (state) => {
  return {
    booksReducer: state.booksReducer
  }
}

export default connect(mapStateToProps, {getAllBooks})(App);