import User from "./User";
import axios from "axios";
import {toast} from "react-toastify";

axios.defaults.baseURL = 'http://localhost:8080/';

const activityPrefix = 'activity/'

export default class Api {
    private static _user: User | null;

    static get user(): User | null {
        return this._user;
    }

    static set user(value: User | null) {
        this._user = value;
    }

    static async signUp(user: User) {
        const backendUser = {
            customerTCId: user.id,
            userName: user.name,
            password: user.password
        }
        const {data: response} = await axios.post("user/signUp", backendUser);
        console.info("signUp response", response);
        switch (response.messageType) {
            case "SUCCESS":
                toast.success(response.message);
                break;
            case "ERROR":
                toast.error(response.message);
                break;
            default:
                toast.warn("Undefined message type")
        }
    }

    static async Login(user: User) {
        const backendUser = {
            userName: user.name,
            password: user.password
        }
        const {data: response} = await axios.post("user/login", backendUser);
        if (!response.isSuccess) {
            toast.error("Login failed");
            throw new Error("Login failed");
        }
        toast.success("Login successful");

        return new User(
            response.user.userName,
            response.user.password,
            response.user.tcId,
            response.user.admin
        );
    }

    //---------------------------------------------------

    static async getAllActivities() {
        return await axios.get(activityPrefix + "allActivities");
    }

    static async addActivity(name: string, startDate: string, endDate: string, quota: number) {
        const payload = {
            activityName: name,
            startDate,
            endDate,
            quota,
        }

        const {data: response} = await axios.post(activityPrefix + "newActivity", payload);
        if (response.messageType !== "SUCCESS") {
            toast.error(response.message);
            throw new Error();
        }

        toast.success("Activity added successfully");
    }
}