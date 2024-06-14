import Head from "next/head";
import { Container, Row, Card, Button, Col, Form } from "react-bootstrap";

import CustomFooter from "../components/customfooter.jsx";
import Link from "next/link";



export default function Home() {
  return (
    
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
  
      <Container>
        <h1>Welcome To My Sample Project!</h1>
        <p>This is a simple project using react to make a default log in and sign up page. The project uses React, NextJS, and React-Bootstrap to make this possible.</p>
        <p>You can find the source code for this website on GitHub at this <Link href="https://github.com/greeshiee/sample-react-project">repository</Link></p>
        <h2>Click Here to Sign Up or Log In!</h2>
        <Col>
          <Link href="/signup">
            <Button className="signup" variant="dark">Sign Up</Button>
          </Link>
          <Link href="/login">
            <Button className="login" variant="dark">Log In</Button>
          </Link>
        </Col>
        <CustomFooter/>
      </Container>
    </Container>
  );
}
