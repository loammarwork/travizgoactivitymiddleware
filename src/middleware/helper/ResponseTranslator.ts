import mapper from "./mapper";

class ResponseError {
    public success: boolean;
    public error: { code: number; message: string };
    constructor(error: { code: number; message: string }) {
        this.success = false;
        this.error = error;
    }
}

class ResponseSuccess<T> {
    public success: boolean;
    public data: T;

    constructor(data: T) {
        this.success = true;
        this.data = data;
    }
}

export { ResponseError, ResponseSuccess };
