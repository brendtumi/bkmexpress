import { BexResponse, RawBexResponse } from "./bexResponse";
import { Installment } from "./installment";
export declare class InstallmentsResponseData {
    private installments;
    private status;
    private error;
    constructor(obj?: any);
    Installments: [string, Installment[]];
    Status: string;
    Error: string;
}
export declare class InstallmentsResponse extends BexResponse<InstallmentsResponseData> {
    constructor(obj?: RawBexResponse<InstallmentsResponseData>);
    Installments: [string, Installment[]];
    Status: string;
    Error: string;
}
