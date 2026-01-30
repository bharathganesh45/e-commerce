import React from 'react'
import products from '../products'
import {Row,Col} from 'react-bootstrap'
import Productscreen from './screens/Productscreen'




function Home() {
  return (
    <div>
      <h1 className='text-center mt-2'>Products</h1>

      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
           
            <Productscreen product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home