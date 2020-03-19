import React, { Component } from 'react'
import Header from "../components/Header"
import { Container, Row,Col } from 'react-bootstrap'

export default class Intro extends Component {
  render(){
      return(
        <Container fluid>
        <Header headerTitle="Intro page" />
        <Container fluid><h2>This is Intro Sample page </h2></Container>
        </Container>
      )
  }
}