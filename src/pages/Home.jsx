import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HomeCarousels from "../component/HomeCarousels";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css"

function Home({ products }) {
   


    // const [prodectcount, setproductcount] = useState(0)

    //  useEffect(()=>{
    //         console.log("mouting");
    //         return ()=>{
    //                 console.log("un-mouting");
    //         }
    // },[prodectcount])

    // function adding() {
    //     setproductcount(prodectcount + 1);
    // }
    return (


        <>
            <HomeCarousels />
            <Container className="my-2">
                {/* <h4 className="mt-4 ">Productscound:{prodectcount}</h4>
                <button onClick={adding}>add</button> */}
                <Row >
                    {products.map((product, index) => (
                        <Col sm={12} md={6} lg={3} className="my-2 " key={index} >
                            <Card className="p-2 product-card w-100">
                                <Link to={`/product/${product.id}`}>
                                    <Card.Img variant="top" alt={product.title} src={product.image} />
                                </Link>
                                <Card.Body >
                                    <Card.Title className="product-title">{product.title}</Card.Title>
                                    <div className="">
                                        <h4>{product.price}</h4>
                                        <Link to={`/product/${product.id}`}>
                                            <Button variant="primary"> Detail View</Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}


                </Row>
            </Container>
        </>
    )
}
export default Home;