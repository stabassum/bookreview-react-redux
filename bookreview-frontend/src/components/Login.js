import React from 'react';
import { Divider, Icon} from 'semantic-ui-react';

export default class Login extends React.Component {
    render(){
        return(
            <div>
            <Divider />

            <form>
            
            <div className="ui input">
            
            <label>Username</label>
            <input placeholder="user name"  name="username" type="text" />
           
            <br/>
            <label>Password</label>
            <input placeholder="password"  name="password" type="text" /><br/><br/>
            
            <button className="button button-login" type="submit" value="Log In" > <Icon name="sign in" /> Log in </button>
            
            <br/>
            <br/>
            <p>Don't have an account? <a href="Signup.js">Signup</a> </p>
            <br/>

             </div>
            </form>
            </div>
        )
    }
}