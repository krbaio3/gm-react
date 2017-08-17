import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

require('./navBar.scss');

interface Props {

}

export const NavBar = (props: Props) => {

  const onInit = (props) => {
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  };

  const toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  return (
        <div>
            <Navbar className="col-12" color="primary" light toggleable>
                <NavbarToggler right onClick={this.toggle} className="col-2"/>
                {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Enlace</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <form className="form-inline col-10">
                    <input className="margin-right-xs form-control col-8" type="text" placeholder="Search" />
                    <Button color="success"><i className="fa fa-search" aria-hidden="true" /></Button>
                </form>
            </Navbar>
        </div>
        // <h2>NavBar</h2>
  );
};
