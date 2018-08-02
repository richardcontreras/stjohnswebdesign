import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        
        this.state = { formDisplay: 'block',
                        thankYouDisplay: 'none'
                        }
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ formDisplay: 'none',
                        thankYouDisplay: 'inline'
                      })
    }
    
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                       <Col className='pl-0' sm={{ size: 10, offset: 2 }}>
                        <h6 id='contactHeader' className='my-4'>Contact us at <a href="mailto:richard@stjohnswebdesign.com">richard@stjohnswebdesign.com</a>, or simply fill out the form below!</h6>
                        </Col>
            
                        <Form style={{display: `${this.state.formDisplay}`}} id="contact-form" onSubmit={this.onFormSubmit}>
                            <input type="hidden" name="contact_number"/>
                            <FormGroup row>
                              <Label for="exampleName" sm={2}>Name</Label>
                              <Col sm={10}>
                                <Input type="text" name="user_name" id="exampleName" placeholder="Your name" required/>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="exampleEmail" sm={2}>Email</Label>
                              <Col sm={10}>
                                <Input type="email" name="user_email" id="exampleEmail" placeholder="Email address" required/>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Label for="exampleText" sm={2}>Message</Label>
                              <Col sm={10}>
                                <Input type="textarea" name="message" id="exampleText" placeholder="What kind of website do you want to build?" required/>
                              </Col>
                            </FormGroup>
                            <FormGroup className='pl-0' check row>
                              <Col sm={{ size: 10, offset: 2 }}>
                                <Button outline color="primary">Submit</Button>
                              </Col>
                            </FormGroup>
                          </Form>
            
                
                <p style={{display: `${this.state.thankYouDisplay}`}}>Thank you for contacting us! We will respond to you as soon as we can.</p>
           
                    </Col>
                </Row>
            </Container>
        )
    }
}
