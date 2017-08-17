import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { ShakeSlow } from 'reshake';
//https://elrumordelaluz.github.io/reshake/

require('./social.scss');

interface Props {

}

export const Social = (props: Props) => {

  return (
        <div>
            <Navbar className="col-12" color="primary" light toggleable>
            <ShakeSlow><Button color="success">
                        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
                    </Button></ShakeSlow>
                    <Button color="success">
                        <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
                    </Button>
                    <Button color="success">
                        <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
                    </Button>
                    <Button color="success">
                        <i className="fa fa-google-plus-square fa-2x" aria-hidden="true" />
                    </Button>
                    <Button color="success">
                        <i className="fa fa-bell fa-2x" aria-hidden="true" />
                    </Button>
            </Navbar>
        </div>
        // <h2>NavBar</h2>
  );
};
