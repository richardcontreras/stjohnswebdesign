import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, CardHeader, Button, CardTitle, CardText, Col, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class PricingDetail extends Component {
    render() {
        
        if (!this.props.pricingItem) {
            return (
                <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }}>
                    <Card className='mt-4'>
                        <CardHeader id='pricingNoneSelectedHeader' style={{background: `${this.props.headerColor}`, color: `${this.props.headerTextColor}`}}><h5>Select a feature for pricing information</h5></CardHeader>
                        <CardBody>
                        <CardImg src='https://images.unsplash.com/photo-1516159754081-f01c990481dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5833794a8cdecd7fbd8bc2af0ab14b30&auto=format&fit=crop&w=1050&q=80' alt="Card cap"/>
                        </CardBody>
                    </Card>
                </Col>
            )
        }
        
        return (
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 7, offset: 0 }} lg={{ size: 6, offset: 0 }} xl={{ size: 5, offset: 0 }} className='mt-4'>
                <Card>
                        <CardHeader id='pricingSelectedHeader' style={{background: `${this.props.headerColor}`, color: `${this.props.headerTextColor}`}}><h5>{this.props.pricingItem.name}</h5></CardHeader>
                        <CardBody>
                            <CardText>{this.props.pricingItem.description1}</CardText>
                            <CardText>{this.props.pricingItem.description2}</CardText>
                            <CardText>Price: {this.props.pricingItem.price}</CardText>
                        </CardBody>
                </Card>
             </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        pricingItem: state.activePricingItem,
        headerColor: state.navbarColor,
        headerTextColor: state.navbarTextColor
    }
}

export default connect(mapStateToProps)(PricingDetail);