import { BexResponse, RawBexResponse } from "../bexResponse";
export declare class NonceReceivedResponse extends BexResponse<string> {
    status: string;
    constructor(obj?: RawBexResponse<string>);
}
