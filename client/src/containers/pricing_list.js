import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPricingItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Col, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';

class PricingList extends Component {
        constructor(props) {
        super(props)
        
        this.state = { viewedPricingDisplay: 'none' }
    }
    
      renderList() {
          return this.props.pricing.map((pricingItem) => {
              return (
                    <ListGroupItem onClick={() => {
                  this.props.selectPricingItem(pricingItem);
                  if (pricingItem.name === 'Add database') {
                        this.setState({ viewedPricingDisplay: 'inline-block' })
                            }
                        }
                    }
                        key={pricingItem.id} 
                        className='list-group-item-action'
                    >
                        {pricingItem.name}
                    </ListGroupItem>
                )
          }) 
    }
    
    renderOptions() {
        return this.props.pricing.map((pricingItem) => {
              return (
                    <option 
                        key={pricingItem.id}
                        value={pricingItem.id}
                    >
                        {pricingItem.name}
                    </option>
                )
          }) 
    }
    
    render() {
        return (
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 5, offset: 0 }} lg={{ size: 4, offset: 1 }} xl={{ size: 3, offset: 2 }} className='mt-4'>
                <ListGroup className='reactstrap-boxshadow' id='pricingListGroup'>
                    {this.renderList()}
                </ListGroup>
                <FormGroup id='pricingSelectorGroup'>
                  <Input onChange={() => {
                            let selectedItem = document.getElementById('exampleSelect').value;
                            if (selectedItem !== 'null') {
                                   this.props.selectPricingItem(this.props.pricing[selectedItem])
                                  };
    
                            if (selectedItem == 3) {
                                this.setState({ viewedPricingDisplay: 'inline-block' });
                            }
                                   
                                  }} type="select" name="select" id="exampleSelect">
                    <option value='null'>Select a service:</option>
                    {this.renderOptions()}
                  </Input>
                </FormGroup>
        
                <p className='mt-3 ml-3' style={{ display: `${this.state.viewedPricingDisplay}`}}>Now that you know our rates, click <a href='/contact'>here</a> to contact us and get your website started today!</p>

            </Col>          
        )
    }
}

function mapStateToProps(state) {
    return (
        { pricing: state.pricing}
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectPricingItem: selectPricingItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingList);