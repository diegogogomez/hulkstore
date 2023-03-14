import { Exist } from "./exist";
import { Inflow } from "./inflow";
import { Outflow } from "./outflow";

export interface Product {
    productId: Number;
    productName: String;
    productImage: String;
    date: Date;
    movement: String;
    inFlowDto: Inflow;
    outFlowDto: Outflow;
    existDto: Exist;
}
