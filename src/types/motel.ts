import { UserProperty, UserExample, UserRole } from "./user";

export enum MotelStatus { Approved, NotApproved, Decline }

export interface MotelProperty {
    name: string,
    owner: UserProperty,
    address: string,
    fee: string,
    description: string,
    illustrationHref: string[],
    status: MotelStatus
}

export const MotelExample = {
    name: "Chung cư mini tại cầu giấy",
    owner: UserExample,
    address: "Mai Dịch",
    fee: "2tr",
    description: "Gần ĐHQG.",
    illustrationHref: ["https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeaomJP6AeMuJLI6Hkv13jaWvWLMD-GlGIpiCiibZpUvBKDORoKIIUZjsPVed9C5AtVc&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX8NQ3lD10QplQ7LyD5lxqzpPXJdUu3vSZE-7gcUBzA_5nfPAGd7AtzoM1VXRs6cd8xc&usqp=CAU"],
    status: MotelStatus.Approved
}

export const BestMotelEx = {
    name: "Chung cư mini tại cầu giấy",
    owner: {
        id: '001',
        username: '@john',
        name: 'John',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: "red",
        distance: 1.2,
        address: 'Thanh Xuan',
        role: UserRole.Renter,
    },
    address: "Mai Dịch",
    fee: "2tr",
    description: "Gần ĐHQG.",
    illustrationHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg",
    status: MotelStatus.Approved
}