import {Button, Table} from "react-bootstrap";
import {DispatchWithoutAction, useEffect} from "react";
import Api from "../api/Api";
import dateArrToString from "../utils/dateArrToString";
import {useActivityContext} from "./ActivityContext";

interface Props {
    refresh: DispatchWithoutAction
}

export default function ActivitiesList({refresh}: Props) {
    const {value, setValue} = useActivityContext();

    useEffect(() => {
        Api.getAllActivities().then(({data}) => {
            if (JSON.stringify(value) !== JSON.stringify(data)) setValue(data)
        })
    })

    function handleDelete(activityId: string) {
        Api.deleteActivity(activityId).then(refresh)
    }

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Activity name</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Quota</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                value.map((value, index) => {
                        const {activityId, activityName, startDate, endDate, quota} = value;
                        return (
                            <tr key={index + 1} onClick={() => console.log(activityName)}>
                                <td>{index + 1}</td>
                                <td>{activityName}</td>
                                <td>{dateArrToString(startDate)}</td>
                                <td>{dateArrToString(endDate)}</td>
                                <td>{quota}</td>
                                <td>
                                    <Button size="sm"
                                            variant="danger"
                                            style={{marginRight: "10px"}}
                                            onClick={() => handleDelete(activityId)}
                                    >
                                        Delete
                                    </Button>
                                    <Button size="sm"
                                            variant="info"
                                    >
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </Table>
    </>
}
