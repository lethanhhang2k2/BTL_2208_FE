import { UserProperty, UserExample } from "./user";

export enum MotelStatus { Approved, NotApproved, Decline }

export interface MotelProperty {
    name: string,
    owner: UserProperty,
    address: string,
    fee: string,
    description: string,
    illustrationHref: string,
    status: MotelStatus
}

export const MotelExample: MotelProperty = {
    name: "Chung cư mini tại cầu giấy",
    owner: UserExample,
    address: "Mai Dịch",
    fee: "2tr",
    description: "Gần ĐHQG.",
    illustrationHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg",
    status: MotelStatus.Approved
}