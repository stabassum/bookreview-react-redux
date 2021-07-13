import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Divider } from 'semantic-ui-react';

class App extends React.Component {

  render(){
    
    return (
      <div className="App">

        <Router>


          <NavBar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Toys}/>
            <Route path="/myStuff" component={MyStuff}/>
            <Route path="/about" component={About}/>
          </Switch>

          <Footer />

        </Router>
  
      </div>
    );
  }

}

export default App;