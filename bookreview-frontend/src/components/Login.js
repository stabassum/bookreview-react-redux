import React from 'react';
import { Divider, Icon} from 'semantic-ui-react';

export default class Login extends React.Component {
    render(){
        return(
            <form>
            
            <div className="ui input">
            
            <input placeholder="user name" value={loginFormData.username} name="username" type="text" />
            <input placeholder="password" value={loginFormData.password} name="password" type="text" /><br/><br/>
            
            <button className="button button-login" type="submit" value="Log In" > <Icon name="sign in" /> Log in </button>
            
             </div>
            </form>
        )
    }
}