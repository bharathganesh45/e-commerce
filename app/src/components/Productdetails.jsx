import React from "react";
import products from "../products";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

function Productdetails({ match }) {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
        <Row>
          <Col md={7}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  Rating {product.rating} | No. of Reviews {product.numreviews}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Description : {product.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Price : {product.price}</h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col my={4}>
            <Card className="p-3">
              <ListGroup varient="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Category</Col>
                    <Col>{product.category}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Brand</Col>
                    <Col>{product.brand}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Productdetails;
