import {Button, Form} from "react-bootstrap";
import {FormEvent, useCallback} from "react";
import User from "../api/User";
import Api from "../api/Api";
import {NavigateFunction, useNavigate} from "react-router";

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement
    password: HTMLInputElement
}

async function handleSubmit(event: FormEvent, navigate: NavigateFunction) {
    event.preventDefault();
    const fields = (event.target as HTMLFormElement).elements as FormElements;
    Api.user = await Api.Login(
        new User(fields.username.value, fields.password.value)
    );
    navigate("home");
}

export default function Login() {
    const navigate = useNavigate();
    return <>
        <h2 className="text-center">Login</h2>
        <Form onSubmit={useCallback((e:FormEvent) => handleSubmit(e, navigate),[navigate])}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Enter username" autoComplete="on"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter password" autoComplete="current-password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>;
}
