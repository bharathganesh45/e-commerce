import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Productscreen({ product }) {
  return (
    <>
    
      <Card
        className="my-3 p-3 rounded border"
        style={{ height: "350px", display: "flex", flexDirection: "column" }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            className="border"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>

        <Card.Body style={{ flex: 1 }}>
          <Link to={`/product/${product._id}`}>
            <Card.Title>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="h5">
            <div className="my-3">
              {product.rating} from {product.numreviews} reviews
            </div>
          </Card.Text>
          <Card.Text as="h6">
            <div className="my-3">Rs {product.price}</div>
          </Card.Text>
          <Card.Text as="h6">
            <Link className="my-3 text-danger" to={`/product/${product._id}`}>
              view more
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Productscreen;
