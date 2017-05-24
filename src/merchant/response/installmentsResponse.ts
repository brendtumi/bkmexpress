/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 22.05.2017
 */

// tslint:disable:max-classes-per-file

import {BexResponse, RawBexResponse} from "./bexResponse";
import {Installment} from "./installment";

export class InstallmentsResponseData {

    private installments: [string, Installment[]];
    private status: string;
    private error: string;

    public constructor(obj?: any) {
        if (obj && obj.installments) {
            this.installments = obj.installments;
        }
        if (obj && obj.status) {
            this.status = obj.status;
        }
        if (obj && obj.error) {
            this.error = obj.error;
        }
    }

    get Installments(): [string, Installment[]] {
        return this.installments;
    }

    set Installments(installments: [string, Installment[]]) {
        this.installments = installments;
    }

    get Status() {
        return this.status;
    }

    set Status(status: string) {
        this.status = status;
    }

    get Error(): string {
        return this.error;
    }

    set Error(error: string) {
        this.status = "fail";
        this.error = error;
    }

}

export class InstallmentsResponse extends BexResponse<InstallmentsResponseData> {
    public constructor(obj?: RawBexResponse<InstallmentsResponseData>) {
        super(obj);
        this.Data = new InstallmentsResponseData((obj && obj.data) ? obj.data : null);
    }

    set Installments(installments: [string, Installment[]]) {
        this.Data.Installments = installments;
    }

    set Status(status: string) {
        this.Data.Status = status;
    }

    set Error(error: string) {
        this.Data.Error = error;
    }
}