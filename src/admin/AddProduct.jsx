import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { userRegister } from "../redux/userRegister";
import { useDispatch } from "react-redux";

function AddProduct() {
    const { Formik } = formik;
    const naviget = useNavigate();

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        productName: yup.string().required("Please enter product name"),
        productPrice: yup.number().required("Please enter product price"),
        productDescription: yup.string().required("Please enter product description"),
        productPhoto: yup.string().required("Please add Product Photo")

    });
    function handleRegister(values) {
        values.id = Date.now();//this give us date and milisecond
        values.role = "user";
        values.status = true;
        // dispatch(userRegister(values));
        toast.success("Add a new product");
        // naviget("/login");
    }
    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Row>
                            <Col className="mb-2 text-center"> <h4>Add Product</h4></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleRegister}
                                    initialValues={{
                                        productName: '',
                                        productPrice: 0,
                                        productDescription: '',
                                        productPhoto: ''

                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formGroupName">
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter product name"
                                                    name="productName"
                                                    onChange={handleChange}
                                                    value={values.productName}
                                                    isValid={touched?.productName && !errors?.productName} //this is a property to check valid
                                                    isInvalid={touched?.productName && !!errors?.productName}//this is a property to check invalid
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.productName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label>Product Price </Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter product price"
                                                    name="productPrice"
                                                    onChange={handleChange}
                                                    value={values.productPrice}
                                                    isValid={touched?.productPrice && !errors?.productPrice}
                                                    isInvalid={touched?.productPrice && !!errors?.productPrice}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.productPrice}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                <Form.Label>Product Description </Form.Label>
                                                <Form.Control
                                                    as={'textarea'}
                                                    rows={4}
                                                    placeholder="Enter product description"
                                                    name="productDescription"
                                                    onChange={handleChange}
                                                    value={values.productDescription}
                                                    isValid={touched?.productDescription && !errors?.productDescription}
                                                    isInvalid={touched?.productDescription && !!errors?.productDescription}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.productDescription}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupProductPhoto">
                                                <Form.Label>Product Photo  </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="add product photo"
                                                    name="productPhoto"
                                                    onChange={handleChange}
                                                    value={values.productPhoto}
                                                    isValid={touched?.productPhoto && !errors?.productPhoto}
                                                    isInvalid={touched?.productPhoto && !!errors?.productPhoto}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.productPhoto}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <div className="d-grid mb-4">
                                                <Button type="submit">Add Product</Button>
                                            </div>
                                        </Form>

                                    )}

                                </Formik>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddProduct;