import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { Container, Card, CardBody, Nav, NavItem, Table } from 'reactstrap';


function Header() {
    return (
        <Nav style={{margin:'20px'}}>
            <NavItem active>
                <Link style={{margin:'50px'}} to="/players/list">Manage Players</Link>
            </NavItem>
            <NavItem>
                <Link to="/status/game/1">  Manage Player Status</Link>
            </NavItem>
        </Nav>
    )
}

export default Header;