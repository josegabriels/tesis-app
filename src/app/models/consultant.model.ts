export class Consultant {
    
    id: number;
    username: string;
    password: string;

    constructor(data?:any){
        Object.assign(this, data)
    }

}
