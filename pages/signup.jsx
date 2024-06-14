import { Container, Form, Button, Col, Row} from "react-bootstrap";
import Link from 'next/link';
import CustomFooter from "../components/customfooter";

function Signup() {
    return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h1>
          Sign Up
        </h1>
        <p>
          Already A Member? <Link href="/login">Click here to log in</Link>
        </p>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Col>

          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email"/>
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
  
  export default Signup;