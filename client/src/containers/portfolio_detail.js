import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import passportlandia from '../img/pplScreenshot.png';

export default class PortfolioDetail extends Component {
    render() {
        return (
            <div>
            <Container className='mt-4 mb-4 mobile-portfolio'>
                <Row>
                    <Col xs={{ size: 10, offset: 1 }} sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} xl={{ size: 4, offset: 4 }}>
                        <Card className='reactstrap-boxshadow'>
                            <CardImg top width="100%" src={passportlandia} alt="Card cap" />
                            <CardBody className='pt-0'>
                              <CardTitle >Passportlandia</CardTitle>
                              <CardSubtitle><a href='https://www.passportlandia.com'>www.passportlandia.com</a></CardSubtitle>
                              <CardText className='mt-2'>A scavenger hunt set across the entire city of Portland. Users can create personal accounts and track how many locations they have visited. If you want to create unique portals for your clients, this site offers a sample of that capability.</CardText>
                              <CardText>More sites to come!</CardText>
                              <CardText>Click <Link to='/pricing'>here</Link> for our rate sheet.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            <Container className='mt-4 desktop-portfolio'>
                <Row>
                    <Col md={{ size: 6, offset: 0 }} lg={{ size: 5, offset: 1 }} xl={{ size: 4, offset: 2 }}>
                            <img className=
    'img-fluid img-thumbnail reactstrap-boxshadow' top width="100%" src={passportlandia} alt="Card cap" />
                    </Col>
            
                    <Col md={{ size: 6, offset: 0 }} lg={{ size: 5, offset: 0 }} xl={{ size: 4, offset: 0 }}>
                        <Card className='reactstrap-boxshadow'>
                              <CardHeader id='portfolioDetailHeader'><h5 className='text-center'>Passportlandia</h5></CardHeader>
                              <CardBody>
                                  <CardSubtitle className='text-center'><a href='https://www.passportlandia.com' target="_blank">www.passportlandia.com</a></CardSubtitle>
                                  <CardText className='mt-2'>A scavenger hunt set across the entire city of Portland. Users can create personal accounts and track how many locations they have visited. If you want to create unique portals for your clients, this site offers a sample of that capability.</CardText>
                                  <CardText>More sites to come!</CardText>
                                  <CardText>Click <Link to='/pricing'>here</Link> for our rate sheet.</CardText>
                              </CardBody>
                       </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

