import React from 'react';
import { Divider, Icon} from 'semantic-ui-react';

export default class Login extends React.Component {
    render(){
        return(
            <div>
            <Divider />

            <h4>Login</h4>

            <form>
            
            <div className="ui input">

            <p>Please login or <a href="Signup.js">Signup</a> to use <b>Book Review</b></p>
            <br/>

            <label>Username</label>
            <input placeholder="user name"  name="username" type="text" />
           
            <br/>
            <br/>
            <label>Password</label>
            <input placeholder="password"  name="password" type="text" /><br/><br/>
            
            <button className="button button-login" type="submit" value="Log In" > <Icon name="sign in" /> Log in </button>
            
            <br/>
            <br/>


             </div>
            </form>
            </div>
        )
    }
}