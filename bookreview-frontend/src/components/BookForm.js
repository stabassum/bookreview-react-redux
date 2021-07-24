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
                <Form.Input fluid label='Title: ' placeholder='Name'/>
                <Form.Input fluid label='Author: ' placeholder='Author'/>
                <Form.Input fluid label='Review: ' placeholder='Review'/>
                
            </Form.Group>

            <button>Add Book Review</button>

        </Form>

        </div>

     )
    }

}