export declare class RawBexResponse<T> {
    call?: string;
    result?: string;
    code?: string;
    message?: string;
    description?: string;
    parameters?: any;
    data?: T;
    error?: string;
}
export declare class BexResponse<T> {
    protected call?: string;
    protected result?: string;
    protected code?: string;
    protected message?: string;
    protected description?: string;
    protected parameters?: any;
    protected data?: T;
    constructor(obj?: RawBexResponse<T>);
    Message: string;
    Result: string;
    Code: string;
    Call: string;
    Description: string;
    Parameters: any;
    Data: T;
}
