import { Button,  Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProdectDetails.css"
function ProductDetails({ products }) {

    const { id } = useParams();

    const product = products.find((pr) => pr.id === Number(id))

    return (
        <Container className="prodectDetails">
            <Row>
                <Col lg={4} className="mt-4">
                    <Image className="w-100" src={product.image} alt={product.title} />
                </Col>
                <Col lg={8} className="mt-4 g-5">

                    <ListGroup variant="flush">
                        <ListGroup.Item><h3> {product.title} </h3></ListGroup.Item>
                        <ListGroup.Item><h5> $ {product.price} </h5> </ListGroup.Item>
                        <ListGroup.Item> {product.description} </ListGroup.Item>
                        <ListGroup.Item> 
                            <Button  className=" cart-button"> Add To Cart </Button>    
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>
        </Container>
    )
}
export default ProductDetails;