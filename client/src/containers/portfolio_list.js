import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPortfolio } from '../actions/index';
import { bindActionCreators } from 'redux';

class PortfolioList extends Component {
    
      renderList() {
          return this.props.portfolios.map((portfolio) => {
              return (
                    <li onClick={() => this.props.selectPortfolio(portfolio)}
                        key={portfolio.id} 
                        className='list-group-item list-group-item-action'
                    >
                        {portfolio.name}
                    </li>
                )
          }) 
    }
    
    render() {
        return (
                <ul className='list-group col-4 mt-2'>
                    {this.renderList()}
                </ul>
        )
    }
}

function mapStateToProps(state) {
    return (
        { portfolios: state.portfolios}
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectPortfolio: selectPortfolio }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioList);