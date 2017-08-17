import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

interface Props {

}

export const NavBar = (props: Props) => {

    const onInit = (props) => {
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    const toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    return (
        <div>
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <Button color="info">info</Button>{' '}
                </form>
            </Navbar>
        </div>
    );
};
