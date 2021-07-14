import React, { Component } from 'react';
import { Form, Icon, Divider } from 'semantic-ui-react'

class BookForm extends Component {

    handleOnChange = event => {

    }

    handleOnSubmit = event => {

    }

    render(){
       
        <Form>

            <Form.Group widths='equal'>
                <Form.Input fluid label='Title' placeholder='Name'/>
                <Form.Input fluid label='Author' placeholder='Author'/>
                <Form.Input fluid label='Review' placeholder='Review'/>
            </Form.Group>

            <button>Add Book Review</button>

        </Form>

    }

}