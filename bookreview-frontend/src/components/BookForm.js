import React, { Component } from 'react';
import { Form, Icon, Divider } from 'semantic-ui-react'

export default class BookForm extends Component {

    handleOnChange = event => {

    }

    handleOnSubmit = event => {

    }

    render(){
       
     return (

       <div>

        <h4>Add Book</h4>  

        <Form>

            <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Name'/>
                <br/>
                
                <Form.Input fluid label='Author' placeholder='Author'/>
                <br/>
                <Form.Input fluid label='Review' placeholder='Review'/>
                <br/>
            </Form.Group>

            <button>Add Book Review</button>

        </Form>

        </div>

     )
    }

}