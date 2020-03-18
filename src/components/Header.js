import React, { Component } from 'react'
import { Container, Row,Col,Navbar, Nav } from 'react-bootstrap'
const HeaderComponent = (props) =>  (
    <Container fluid>
    <Navbar expand="lg" variant="dark" bg="primary">
      <Navbar.Brand href="#">{props.headerTitle!==undefined ? props.headerTitle :"DOCUMENTATION"}</Navbar.Brand>
    </Navbar>
  </Container>
    )
 
    export default HeaderComponent;