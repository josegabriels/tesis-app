import { Consultant } from "./consultant.model";

export class Customer {
    
    id: number;
    name: string;
    consultant_id: number;

    consultant: Consultant

    constructor(data?:any){
        Object.assign(this, data)
    }

}
