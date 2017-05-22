/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 22.05.2017
 */

export class Installment {
    private numberOfInstallment: string;
    private installmentAmount: string;
    private totalAmount: string;
    private label: string;
    private vposConfig: string;

    public constructor(numberOfInstallment: string, installmentAmount: string, totalAmount: string, vposConfig: string) {
        this.numberOfInstallment = numberOfInstallment;
        this.installmentAmount = installmentAmount;
        this.totalAmount = totalAmount;
        this.vposConfig = vposConfig;
    }

    get NumberOfInstallment(): string {
        return this.numberOfInstallment;
    }

    set NumberOfInstallment(numberOfInstallment: string) {
        this.numberOfInstallment = numberOfInstallment;
    }

    get InstallmentAmount(): string {
        return this.installmentAmount;
    }

    set InstallmentAmount(installmentAmount: string) {
        this.installmentAmount = installmentAmount;
    }

    get TotalAmount(): string {
        return this.totalAmount;
    }

    set TotalAmount(totalAmount) {
        this.totalAmount = totalAmount;
    }

    get VposConfig(): string {
        return this.vposConfig;
    }

    set VposConfig(vposConfig: string) {
        this.vposConfig = vposConfig;
    }

    get Label(): string {
        return this.label;
    }

    set Label(label: string) {
        this.label = label;
    }

}