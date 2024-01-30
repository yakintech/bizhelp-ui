import { BaseModel } from "../../../../model/BaseModel";

export interface CustomerDetailModel extends BaseModel{
    companyName : string;
    contactName : string;
    contactTitle : string;
}