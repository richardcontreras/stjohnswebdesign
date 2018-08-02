import axios from 'axios';

export function greetUser(username) {
    return {
      type: 'USERNAME_ENTERED',
      payload: `Welcome, ${username}!`
    };
}

export function changeNavbarColor(color) {
    return {
      type: 'CHANGED_NAVBAR_COLOR',
      payload: color
    };
}

export function toggleNavbarText(number) {
    if (number % 2 === 1) {
        return {
          type: 'TOGGLED_NAVBAR_TEXT',
          payload: 'white'
        };
    } else {
        return {
          type: 'TOGGLED_NAVBAR_TEXT',
          payload: 'black'
        };
    }
}

export function selectService(service) {
    return {
      type: 'SERVICE_SELECTED',
      payload: service
    };
}

export function fetchAPIData(food) {
    const request = axios.get(`https://api.edamam.com/search?q=${food}&app_id=3380639f&app_key=4a591898cd321ed8f012be8b60250b01&from=0&to=3&calories=591-722&health=alcohol-free`);
    
    return {
        type: 'FETCH_API_DATA',
        payload: request
    };
}

export function selectPortfolio(portfolio) {    
    return {
      type: 'PORTFOLIO_SELECTED',
      payload: portfolio
    };
}

export function selectPricingItem(portfolio) {    
    return {
      type: 'PRICING_ITEM_SELECTED',
      payload: portfolio
    };
}

