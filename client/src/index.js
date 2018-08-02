import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { Container, Row } from 'reactstrap';
import './styles.css';

import NavigationBar from './containers/navbar';
import Landing from './components/landing';
import Intro from './containers/intro';
import ServicesList from './containers/services_list';
import ServicesDetail from './containers/services_detail';
import PortfolioList from './containers/portfolio_list';
import PortfolioDetail from './containers/portfolio_detail';
import PricingList from './containers/pricing_list';
import PricingDetail from './containers/pricing_detail';
import Contact from './components/contact';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <NavigationBar />
            <Route exact path="/" component={Landing} />
                        <Route exact path="/intro" component={Intro} />
                                
                        <Container>
                            <Row>
                                <Route path="/services" component={ServicesList} />
                                <Route path="/services" component={ServicesDetail} />
                            </Row>
                        </Container>
                            
                        <Route path="/portfolio" component={PortfolioDetail} />
                        
                        <Container>
                            <Row>
                                <Route path="/pricing" component={PricingList} />
                                <Route path="/pricing" component={PricingDetail} />
                            </Row>
                        </Container>
                            
                        <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
