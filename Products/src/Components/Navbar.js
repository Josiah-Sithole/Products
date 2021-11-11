import React from 'react'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import { Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <Router>
              <div>
                <Navbar bg="dark"variant={'dark'} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">J-Sithy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Items</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Items</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Nike Shoes
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Contact
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
                <div>
                  <Switch>
                      <Route path="/home">
                          <Home/>
                      </Route>
                      <Route path="/about">
                          <About/>
                      </Route>
                      <Route path="/contact">
                          <Contact/>
                      </Route>
                      <Route path="/shop">
                          <Shop/>
                      </Route>
                  </Switch>
            </div>
           </Router>
        )
    }
}
export default Navbar; 