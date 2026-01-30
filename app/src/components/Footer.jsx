import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center p-2'>
          copyright @copy; bharath.in 2025
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer