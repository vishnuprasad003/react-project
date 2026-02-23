import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/userRegister'
import { useSelector } from "react-redux";
function Login() {
   
    const {isAuthentication}=useSelector((state)=> state.userState);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [validated, setvalidated] = useState(false)
    const [logdata, setlogdata] = useState({
        email: "",
        password: ""
    })
    function getdata(event) {
        setlogdata((prev) => {
            const updateData = { ...prev, [event.target.name]: event.target.value }
            return updateData
        });

    }
    // console.log("logindata-->", logdata);


    function userlogin(event) {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {

            event.stopPropagation();
            setvalidated(true)


            form.querySelectorAll(":invalid").forEach((input) => {
                setError((prev) => {
                    const updateError = { ...prev, [input.name]: input.validationMessage }
                    return updateError
                });

            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((use) => use.email === logdata.email)


        if (!user) {
            toast.error("User not found");
            return;
        }
        if (user.password !== logdata.password) {
            toast.error("Invalid credentials");
            return;
        }
        dispatch(userLogin(user))
        toast.success("User logged successfully");
        navigate('/');


    }
    // useEffect(()=>{
    //     if(isAuthentication){
    //         navigate('/')
    //     }
    // },[])

    return (
        <>
            {isAuthentication ? (
                <Navigate to={'/'} />
            ) : (
                <Container className="mt-4">
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Row>
                                <Col className="mb-2 text-center"> <h4>UserLogin</h4></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form noValidate validated={validated} onSubmit={userlogin}>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                onKeyUp={getdata}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {/* Please  Enter Email */}
                                                {error.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"
                                                placeholder="Password"
                                                name="password"
                                                onKeyUp={getdata}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {/* Please Enter Password */}
                                                {error.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="d-grid mb-4">
                                            <Button type="submit">Login</Button>
                                        </div>
                                    </Form>
                                </Col>
                                <div className="mt-2 mb-4 text-center">
                                    <p>Don't have an account <Link to={"/register"}> Register Now</Link></p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}
export default Login;