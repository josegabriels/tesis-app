import { Account } from "./account.model";

export class AccountStatus {

    id: number;
    account_id: number;
    reputation: number;
    medal: string;
    completed_sales: number;
    service: string;
    cancellations: number;
    mediations: number;
    claims: number;
    gross_sales: number;
    units_sold: number;
    
    account: Account
    
    constructor(data?:any){
        Object.assign(this, data)
    }

}
