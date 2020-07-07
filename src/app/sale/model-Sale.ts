import { ClientModel } from '../client/model-client';

export class SaleModel{
    id:number;
    cantidad:number;
    producto:string;
    cliente:ClientModel
}