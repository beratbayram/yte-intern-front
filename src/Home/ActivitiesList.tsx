import {Table} from "react-bootstrap";
import {useEffect} from "react";
import Api from "../api/Api";
import dateArrToString from "../utils/dateArrToString";
import {useActivityContext} from "./ActivityContext";

export default function ActivitiesList() {
    const {value,setValue} = useActivityContext();

    useEffect(() => {
        Api.getAllActivities().then(({data}) => {
            if (JSON.stringify(value) !== JSON.stringify(data))
                setValue(data)
        })
    })

    return <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Activity name</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Quota</th>
            </tr>
            </thead>
            <tbody>
            {
                value.map((value, index) => {
                        const {activityName, startDate, endDate, quota} = value;
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{activityName}</td>
                                <td>{dateArrToString(startDate)}</td>
                                <td>{dateArrToString(endDate)}</td>
                                <td>{quota}</td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </Table>
    </>
}
