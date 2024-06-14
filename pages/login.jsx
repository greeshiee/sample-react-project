import { Container, Form, Button, Col } from "react-bootstrap";
import Link from 'next/link';
import CustomFooter from "../components/customfooter";

function Login() {
    return (
    <Container>
      <Form>
        <h1>
          Log In
        </h1>
        <p>
          New here? <Link href="/signup">Click here to sign up</Link>
        </p>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Col>
            <Button className="mb-3" type="submit" variant="dark">Submit</Button>{' '}
            <Link href="/">
                <Button className="mb-3" type="submit" variant="dark">Return To Home</Button>{' '}
            </Link>
        </Col>
      </Form>

      <CustomFooter/>

      </Container>
      
    );
  }
  
  export default Login;