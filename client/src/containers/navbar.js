import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
      
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }  
    
  render() {
    return (
      <div>
        <Navbar id='navbarRectangle' style={{ background:`${this.props.navbarColor}`}} 
        className='navbar-dark' expand="md">
          <NavItem id='companyName'><Link id='navbarBrandText' style={{color: `${this.props.navbarTextColor}`}} to='/'>St. John's Web Design</Link></NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color: `${this.props.navbarTextColor}`}} href="#">{this.props.username}</NavLink>
              </NavItem>

              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} >
                <DropdownToggle style={{color: `${this.props.navbarTextColor}`}}  nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><Link className='dropdown-menu-item' to='/intro'>Intro</Link></DropdownItem>
                  <DropdownItem><Link className='dropdown-menu-item' to='/services'>Services</Link></DropdownItem>
                  <DropdownItem><Link className='dropdown-menu-item' to='/portfolio'>Portfolio</Link></DropdownItem>
                  <DropdownItem><Link className='dropdown-menu-item' to='/pricing'>Rates</Link></DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink tag={Link} to='/contact' style={{color: `${this.props.navbarTextColor}`}}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return (
        { username: state.username,
          navbarColor: state.navbarColor,
          navbarTextColor: state.navbarTextColor
        }
    )
}

export default connect(mapStateToProps)(NavigationBar)