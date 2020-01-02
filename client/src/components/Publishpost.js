import React, { Component } from 'react';
import LayoutLogin from './LayoutLogin';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const axios = require('axios');


class PublishPost extends Component {

        state = {
            publicationTitle: "",
            body: "",
            authorName: "",
            date: new Date(),
            value: []
        };
    

    handleChange = ({target: { name, value }}) => {
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        axios.post("http://localhost:8080/publishpost", this.state)
            .then(response => {
                axios.get('http://localhost:8080/getposts')
            .then(res => this.setState({
                value: res.data.data
            }))
            .catch(error => {
                console.log(error)
             })
          })
            .catch(error => {
                console.log(error)
                alert(`Error encountered in post`)
            })
    }

    render(){
        return (
            <>
            <LayoutLogin />
            <div className="publishPost">
                    <form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="publicationTitle">
                            <Form.Control type="text" size="lg" name="publicationTitle" value={this.state.publicationTitle} onChange={this.handleChange} placeholder="Title" />
                        </Form.Group>
                        <Form.Group controlId="body">
                            <Form.Control as="textarea" rows="5" name="body" value={this.state.body} onChange={this.handleChange} placeholder="Story..." />
                        </Form.Group>
                        <Form.Group controlId="authorName">
                            <Form.Control type="text" name="authorName" value={this.state.authorName} onChange={this.handleChange} placeholder="Author" />
                        </Form.Group>
                        <Button variant='primary' type='submit' size='lg' block>
                        Publish Post
                        </Button>
                    </form>
                </div>
            </>
        )
    }
}

export default PublishPost