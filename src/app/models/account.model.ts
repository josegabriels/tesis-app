import { Customer } from "./customer.model";

export class Account {

    id: number;
    mercadolibre_id: string;
    customer_id: string;

    customer: Customer

    constructor(data?:any){
        Object.assign(this, data)
    }

}
