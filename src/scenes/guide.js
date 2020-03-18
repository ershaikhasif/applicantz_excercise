import React, { Component } from 'react'
import Header from "../components/Header"
import { Container, Row,Col } from 'react-bootstrap'

export default class Guide extends Component {
  render(){
      return(
        <Container fluid>
            <Header headerTitle="Guidance page" />
        </Container>
      )
  }
}