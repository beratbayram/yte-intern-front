import {Container, Row, Col} from "react-bootstrap";
import Login from "./Login";
import "./Welcome.scss";
import SignUp from "./SignUp";

export default function Welcome() {
    return (
        <div className="Welcome">
            <Container>
                <Row >
                    <h1 className="mb-5 text-center">Welcome to YTE Management System</h1>
                </Row>
                <Row>
                    <Col md={5} className="mb-5">
                        <Login/>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <SignUp/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}