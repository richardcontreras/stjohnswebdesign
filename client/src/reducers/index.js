import { combineReducers } from 'redux';
import GreetUserReducer from './reducer_greet_user';
import ChangeNavbarColorReducer from './reducer_change_navbar_color';
import ToggleNavbarText from './reducer_toggle_navbar_text';
import ServicesReducer from './reducer_services';
import ActiveService from './reducer_active_service';
import APIData from './reducer_api_call';
import PortfolioReducer from './reducer_portfolios';
import ActivePortfolio from './reducer_active_portfolio';
import PricingReducer from './reducer_pricing';
import ActivePricingItem from './reducer_active_pricing_item';


const rootReducer = combineReducers({
    username: GreetUserReducer,
    navbarColor: ChangeNavbarColorReducer,
    navbarTextColor: ToggleNavbarText,
    services: ServicesReducer,
    activeService: ActiveService,
    apiData: APIData,
    portfolios: PortfolioReducer,
    activePortfolio: ActivePortfolio,
    pricing: PricingReducer,
    activePricingItem: ActivePricingItem
});

export default rootReducer;
