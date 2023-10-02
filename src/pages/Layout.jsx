import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { logout } from '../auth/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';






const Layout = () => {

  const [user] = useAuthState(auth);

  return (
    <Container fluid>
      <Row>
        <Navbar bg="light" variant="light">
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                {user ? (
                  <>
                    <LinkContainer to="/countries">
                      <Nav.Link>Countries</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favourites">
                      <Nav.Link>Favourites</Nav.Link>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                  </>
                )
                }
              </Nav>
            </Navbar.Collapse>
            {user ? (
              <Button onClick={logout} to="/" style={{ height: "2rem", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "0.5rem", right: "2rem" }}>Logout</Button>
            ) : (
              <LinkContainer to="/login" style={{ height: "2rem", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "0.5rem", right: "2rem" }}>
                <Button>Login</Button>
              </LinkContainer>
            )
            }
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
