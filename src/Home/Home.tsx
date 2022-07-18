import Api from "../api/Api";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {useEffect} from "react";
import ActivitiesList from "./ActivitiesList";
import AddEventModal from "./AddEventModal";
import useForceUpdate from "../utils/useForceUpdate";

export default function Home() {
    const navigate = useNavigate();
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        if (Api.user === undefined) {
            toast.error("User is not logged in");
            Api.user = null;
            navigate("/")
        }
    }, [navigate]);

    return (
        <Container>
            <Row>
                <Alert variant="primary">
                    {Api.user?.toString()}
                </Alert>
            </Row>
            <Row>
                <Col xs="8">
                    <h1>Events Home Page</h1>
                </Col>
                <Col>
                    <AddEventModal refresh={forceUpdate}/>
                </Col>
                <Col>
                    <Button size="lg" onClick={forceUpdate}>Refresh</Button>
                </Col>
            </Row>
            <Row>
                <ActivitiesList/>
            </Row>
        </Container>
    );
}