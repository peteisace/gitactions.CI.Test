export default class Message {
    private _message: string;
    private _time: Date;

    constructor(message: string, time: Date) {
        this._message = message;
        this._time = time;
    }

    public get message() : string {
        return this._message;
    }

    public get time() : Date {
        return this._time;
    }
}