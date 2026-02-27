import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { userRegister } from "../redux/userRegister";
import { useDispatch } from "react-redux";
function Register() {
    const { Formik } = formik;
    const naviget = useNavigate();

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        fullName: yup.string().required("Please enter your name").min(2, "Name must contain at least 2 characters"),
        email: yup.string().required("Please enter your email").email("Please enter a valid email address"),
        password: yup.string().required("Please enter your password").min(8, "Password must be at least 8 characters"),

    });
    function handleRegister(values){
        values.id = Date.now();//this give us date and milisecond
        values.role = "user";
        values.status = true;
        dispatch(userRegister(values));
        toast.success("User registration successfully completed");
        naviget("/login");
    }
    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Row>
                            <Col className="mb-2 text-center"> <h4>User Registration</h4></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleRegister}
                                    initialValues={{
                                        fullName: '',
                                        email: '',
                                        password: ''

                                    }}
                                >
                                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formGroupName">
                                                <Form.Label>Full name</Form.Label>
                                                <Form.Control type="text"
                                                    placeholder="Enter fullname"
                                                    name="fullName"
                                                    onChange={handleChange}
                                                    value={values.fullName}
                                                    isValid={touched?.fullName && !errors?.fullName} //this is a property to check valid
                                                    isInvalid={touched?.fullName && !!errors?.fullName}//this is a property to check invalid
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.fullName}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label>Email </Form.Label>
                                                <Form.Control type="email"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    isValid={touched?.email && !errors?.email}
                                                    isInvalid={touched?.email && !!errors?.email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                    isValid={touched?.password && !errors?.password}
                                                    isInvalid={touched?.password && !!errors?.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors?.password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <div className="d-grid mb-4">
                                                <Button type="submit">Submit</Button>
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
export default Register;