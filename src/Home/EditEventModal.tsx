import {DispatchWithoutAction, FormEvent, useCallback, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Api from "../api/Api";
import Activity from "../api/Activity";
import dateArrToLocalDateTime from "../utils/dateArrToLocalDateTime";

interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement
    startDate: HTMLInputElement
    endDate: HTMLInputElement
    quota: HTMLInputElement
}

interface Props {
    activity: Activity
    refresh: DispatchWithoutAction
}

export default function EditEventModal({activity,refresh}: Props) {
    const {activityId, activityName, startDate, endDate, quota} = activity;

    console.log(dateArrToLocalDateTime(startDate))

    const [show, setShow] = useState(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const fields = (event.target as HTMLFormElement).elements as FormElements;
        if(!activityId) throw new Error(`Activity has no Id`);

        await Api.updateActivity(
            activityId,
            fields.name.value,
            fields.startDate.value,
            fields.endDate.value,
            parseInt(fields.quota.value)
        );
        refresh()
        setShow(false);
    }

    return (
        <>
            <Button size="sm"
                    variant="info"
                    onClick={() => setShow(true)}
            >
                Edit
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={useCallback(handleSubmit, [activityId, refresh])}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Activity Name</Form.Label>
                            <Form.Control required
                                          type="text"
                                          defaultValue={activityName}
                                          placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control required
                                          type="datetime-local"
                                          defaultValue={dateArrToLocalDateTime(startDate)}
                                          placeholder="Enter start date"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="endDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control required
                                          type="datetime-local"
                                          defaultValue={dateArrToLocalDateTime(endDate)}
                                          placeholder="Enter end date"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quota">
                            <Form.Label>Quota</Form.Label>
                            <Form.Control required
                                          type="number"
                                          min={1}
                                          placeholder="Enter quota"
                                          defaultValue={quota}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}