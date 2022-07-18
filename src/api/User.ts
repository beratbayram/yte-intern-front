export default class User {
    private _id: number | undefined;
    private _name: string;
    private _password: string;
    private _isAdmin: boolean | undefined;

    constructor(name: string, password: string, id?: number, isAdmin?: boolean) {
        this._name = name;
        this._password = password;
        this._id = id;
        this._isAdmin = isAdmin;
    }

    toString(): string {
        return `username: ${this.name}, password: ${this.password}, ID: ${this.id}, isAdmin: ${this.isAdmin}`;
    }

    // getters & setters

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get isAdmin(): boolean | undefined {
        return this._isAdmin;
    }

    set isAdmin(value: boolean | undefined) {
        this._isAdmin = value;
    }
}