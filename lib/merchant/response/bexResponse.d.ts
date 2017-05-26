export declare class RawBexResponse<T> {
    call?: string | null;
    result?: string | null;
    code?: string | null;
    message?: string;
    description?: string | null;
    parameters?: any | null;
    data?: T | null;
    error?: string;
}
export declare class BexResponse<T> {
    protected call?: string | null;
    protected result?: string | null;
    protected code?: string | null;
    protected message?: string;
    protected description?: string | null;
    protected parameters?: any | null;
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
