import {Button, Form} from "react-bootstrap";
import {FormEvent} from "react";
import User from "../api/User";
import Api from "../api/Api";

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement
    password: HTMLInputElement
    id: HTMLInputElement
}

async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const fields = (event.target as HTMLFormElement).elements as FormElements;
    const user = new User(fields.username.value, fields.password.value,parseInt(fields.id.value));

    await Api.signUp(user);
}

export default function SignUp() {
    return <>
        <h2 className="text-center">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control required type="number" placeholder="Enter ID" autoComplete="on"/>
            </Form.Group>
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
