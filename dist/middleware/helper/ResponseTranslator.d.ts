declare class ResponseError {
    success: boolean;
    error: {
        code: number;
        message: string;
    };
    constructor(error: {
        code: number;
        message: string;
    });
}
declare class ResponseSuccess<T> {
    success: boolean;
    data: T;
    constructor(data: T);
}
export { ResponseError, ResponseSuccess };
