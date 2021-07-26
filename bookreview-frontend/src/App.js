import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Books from './containers/Books';
import BookForm from './components/BookForm';
import MyStuff from './containers/MyStuff';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import { getAllBooks } from './actions/books';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import history from './history';

class App extends React.Component {

  componentDidMount(){
    this.props.getAllBooks();
  }

  render(){

    let loggedIn = this.props.booksReducer.currentUser.username
    
    return (
      <div className="App">

        <Router history={history}>

          <NavBar />
          
          <h3>Book Review!</h3>
       
         { loggedIn ? <Logout/> : <div> <Login/> <Signup/> </div>}        
         { loggedIn ? <BookForm/> : ""}

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/myStuff" component={MyStuff}/>
            <Route path="/about" component={About}/>
          </Switch>

          <Divider/>
          
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