import React from 'react';

export default class Signup extends React.Component {

    render(){
        return (
            <div>
               
               <h4>Signup</h4>

                <form>
                    <div className="ui input">

                        <label>Username:</label>
                        <input placeholder="username"/>
                        <br/>
                        <br/>

                        <label>Email:</label>
                        <input placeholder="email"/>
                        <br/>
                        <br/>

                        <label>Password:</label>
                        <input placeholder="password"/>
                        <br/>
                        <br/>

                        <button>Sign Up</button>

                    </div>
                </form>

            </div>
        )
    }


}