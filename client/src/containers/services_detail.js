import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPIData } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Card, CardBody, CardImg, CardHeader, Button, CardTitle, CardText, Col, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class ServicesDetail extends Component {
    constructor(props) {
        super(props)
        
        this.state = { term: ''}
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value})
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        
        this.props.fetchAPIData(this.state.term);
        this.setState({ term: '' })
    }
    
    render() {
        
        if (!this.props.service) {
            return (
                <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }}>
                    <Card className='mt-4'>
                        <CardHeader id='servicesNoneSelectedHeader' style={{background: `${this.props.headerColor}`, color: `${this.props.headerTextColor}`}}><h5>Select a service for more information</h5></CardHeader>
                        <CardBody>
                        <CardImg src='https://images.unsplash.com/photo-1531594896955-305cf81269f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f72dd96a14b91aac047e3c71c0516a7&auto=format&fit=crop&w=500&q=60' alt="Card cap"/>
                        </CardBody>
                    </Card>
                </Col>
            )
        }
        
        if (!this.props.apiData && this.props.service.apiSegment) {
             return (
                <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }}>
                    <Card className='mt-4'>
                        <CardHeader id='servicesAPINoData' style={{background: `${this.props.headerColor}`, color: `${this.props.headerTextColor}`}}><h5>{this.props.service.name}</h5></CardHeader>
                        <CardBody>
                            <CardText>{this.props.service.description1}</CardText>
                            <CardText>{this.props.service.description2}</CardText>
                            <Form onSubmit={this.onFormSubmit}>
                                <InputGroup>
                                  <Input value={this.state.term} onChange={this.onInputChange} type="text" placeholder='Search recipes' aria-label="Recipe name" aria-describedby="basic-addon2"/>
                                  <InputGroupAddon addonType="append">
                                    <Button outline color="primary" type="submit">Get recipe</Button>
                                  </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            );
        }
        
        if (this.props.apiData && this.props.service.apiSegment && !this.props.apiData.hits[0]) {

                 return (
                     <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }}>
                         <Card body className="mt-4">
                            <CardText>I'm sorry, we can't find anything by that name. Would you like to search for another recipe?</CardText>
                            <Form onSubmit={this.onFormSubmit}>
                                <InputGroup>
                                  <Input value={this.state.term} onChange={this.onInputChange} type="text" placeholder='Search recipes' aria-label="Recipe name" aria-describedby="basic-addon2"/>
                                  <InputGroupAddon addonType="append">
                                    <Button outline color="primary" type="submit">Get recipe</Button>
                                  </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Card>
                    </Col>
                );
            }
    
        if (this.props.apiData && this.props.service.apiSegment) {
                const recipeImage = this.props.apiData.hits[0].recipe.image;
                const recipeTitle = this.props.apiData.hits[0].recipe.label;
                const recipeURL = this.props.apiData.hits[0].recipe.url;
                const recipeSource = this.props.apiData.hits[0].recipe.source;
                const recipeIngredients = this.props.apiData.hits[0].recipe.ingredients;

                 return (
                     <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }}>
                         <Card className="mt-4">
                            <CardImg id='recipeImage' src={recipeImage} alt="Card cap"/>
                            <CardBody>
                            <CardTitle>{recipeTitle}</CardTitle>
                            <CardText>This recipe comes courtesy of {recipeSource}. Make sure your kitchen has {recipeIngredients[0].text.charAt(0).toLowerCase() + recipeIngredients[0].text.substr(1)} and {recipeIngredients[1].text.charAt(0).toLowerCase() + recipeIngredients[1].text.substr(1)}. Enjoy!</CardText>
                            <a href={recipeURL} className="btn btn-primary" target="_blank">Get full recipe</a>
                            <CardText className='mt-2'>Search for another recipe</CardText>
                            <Form onSubmit={this.onFormSubmit}>
                                <InputGroup>
                                  <Input value={this.state.term} onChange={this.onInputChange} type="text" placeholder='Search recipes' aria-label="Recipe name" aria-describedby="basic-addon2"/>
                                  <InputGroupAddon addonType="append">
                                    <Button outline color="primary" type="submit">Get recipe</Button>
                                  </InputGroupAddon>
                                </InputGroup>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                );
            }
        
        return (
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }} className='mt-4'>
                <Card>
                        <CardHeader id='serviceSelectedNoAPI' style={{background: `${this.props.headerColor}`, color: `${this.props.headerTextColor}`}}><h5>{this.props.service.name}</h5></CardHeader>
                        <CardBody>
                            <CardText>{this.props.service.description1}</CardText>
                            <CardText>{this.props.service.description2}</CardText>
                        </CardBody>
                </Card>
             </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        service: state.activeService,
        apiData: state.apiData,
        headerColor: state.navbarColor,
        headerTextColor: state.navbarTextColor
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAPIData: fetchAPIData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesDetail);