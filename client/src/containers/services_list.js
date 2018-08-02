import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectService } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Col, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';

class ServicesList extends Component {
    constructor(props) {
        super(props)
        
        this.state = { viewedServicesDisplay: 'none' }
    }
    
      renderList() {
          return this.props.services.map((service) => {
              return (
                    <ListGroupItem onClick={() => {
                  this.props.selectService(service);
                  if (service.name === 'User Authentication') {
                        this.setState({ viewedServicesDisplay: 'inline-block' })
                            }
                        }
                    }
                        key={service.id} 
                        className='list-group-item-action'
                    >
                        {service.name}
                    </ListGroupItem>
                )
          }) 
    }
    
    renderOptions() {
        return this.props.services.map((service) => {
              return (
                    <option 
                        key={service.id}
                        value={service.id}
                    >
                        {service.name}
                    </option>
                )
          }) 
    }
    
    render() {
        return (
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 5, offset: 0 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 2 }} className='mt-4'>
                <ListGroup className='reactstrap-boxshadow' id='servicesListGroup'>
                    {this.renderList()}
                </ListGroup>
                <FormGroup id='servicesSelectorGroup'>
                  <Input onChange={() => {
                            let selectedItem = document.getElementById('exampleSelect').value;
                            if (selectedItem !== 'null') {
                                   this.props.selectService(this.props.services[selectedItem])
                                  };
    
                            if (selectedItem == 4) {
                                this.setState({ viewedServicesDisplay: 'inline-block' });
                            }
                                   
                                  }} type="select" name="select" id="exampleSelect">
                    <option value='null'>Select a service:</option>
                    {this.renderOptions()}
                  </Input>
                </FormGroup>
        
                <p className='mt-3 ml-3' style={{ display: `${this.state.viewedServicesDisplay}`}}>Now that you've seen our services, click <Link to='/portfolio'>here</Link> to see our portfolio of past projects.</p>

            </Col>            
        )
    }
}

function mapStateToProps(state) {
    return (
        { services: state.services}
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectService: selectService }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);