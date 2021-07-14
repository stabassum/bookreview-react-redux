import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';

export default class Signup extends React.Component {

    render(){
        return (
            <div>
                <Divider/>

                <form>
                    <div className="ui input">

                        <label>Username:</label>
                        <input placeholder="username"/>
                        <br/>

                        <label>Email:</label>
                        <input placeholder="email"/>
                        <br/>

                        <label>Password:</label>
                        <input placeholder="password"/>
                        <br/>

                        <button></button>

                    </div>
                </form>

            </div>
        )
    }


}