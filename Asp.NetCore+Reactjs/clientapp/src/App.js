import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ShoppingArea from './components/ShoppingArea';
import CheckOutArea from './components/CheckOutArea';
import ProductConsumptionArea from './components/ProductConsumptionArea'
import EditProducts from './components/EditProducts'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <img src={logo} className="App-logo" alt="logo" style={{ width: "60px", height: "60px" }} />
                  <Navbar.Brand as={Link} to="/ShoppingArea">Fun!! Shopping</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link as={Link} to="/">Go Shopping</Nav.Link>
                          <Nav.Link as={Link} to="/CheckOutArea">My Orders</Nav.Link>
                          <Nav.Link as={Link} to="/ProductConsumptionArea">Transcations record</Nav.Link>
                          <Nav.Link as={Link} to="/EditProducts">Edit Products</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
              <Switch>
                  <Route path="/" exact={true}  render={() => <Container style={{ marginTop: "10px", paddingLeft: "90px" }}><ShoppingArea></ShoppingArea> </Container>} />
                  <Route path="/CheckOutArea" render={() => <Container style={{ marginTop: "10px" }}><CheckOutArea></CheckOutArea> </Container>} />
                  <Route path="/ProductConsumptionArea" render={() => <Container style={{ marginTop: "10px" }}><ProductConsumptionArea></ProductConsumptionArea> </Container>} />
                  <Route path="/EditProducts" render={() => <Container fluid style={{ marginTop: "10px" }}><EditProducts></EditProducts> </Container>} />
              </Switch>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
