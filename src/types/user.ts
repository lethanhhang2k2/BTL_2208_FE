import { MotelProperty } from './motel';
export const ThemeColor: any = {
    red: "linear-gradient(135deg, #FD8D32 0%, #A307BA 100%)",
    violet: "linear-gradient(135deg, #8147FF 0%, #8FB4FF 100%)",
    orange: "linear-gradient(135deg, #FDCB5C 0%, #ED4956 100%)"
}

export enum UserRole { Admin = "admin", Renter = "renter", LandLord = "landlord" }
export enum AvatarSize { SSmall = "32px", Small = "50px", Medium = "60px", Large = "80px", XLarge = "120px", X2Large = "180px" }

export interface UserProperty {
    id: string,
    username: string,
    name: string,
    avtHref: string,
    theme: string,
    distance: number,
    address: string,
    role: UserRole,
    posts: number,
    bestMotel?: MotelProperty,
    others?: UserProperty[]
    email: string,
    phone: string,
    profile_link: string,
    token?: string
}

export const UserExample: UserProperty = {
    id: '001',
    username: '@john',
    name: 'John',
    avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
    theme: 'red',
    distance: 1.2,
    role: UserRole.Renter,
    posts: 16,
    address: 'Thanh Xuan Bac',
    email: "nva@gmail.com",
    phone: "0981234567",
    profile_link: "/profile/001",
}

export const UserExample2: UserProperty[] = [
    {
        id: '001',
        username: '@john',
        name: 'John',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: 'red',
        distance: 1.2,
        role: UserRole.Renter,
        posts: 16,
        address: 'Thanh Xuan Bac',
        email: "nva@gmail.com",
        phone: "0981234567",
        profile_link: "/profile/001",
    },
    {
        id: '001',
        username: '@john',
        name: 'John',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: 'red',
        distance: 1.2,
        role: UserRole.Renter,
        posts: 16,
        address: 'Thanh Xuan Bac',
        email: "nva@gmail.com",
        phone: "0981234567",
        profile_link: "/pro,file/001",
    },
    {
        id: '001',
        username: '@john',
        name: 'John',
        avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
        theme: 'red',
        distance: 1.2,
        role: UserRole.Renter,
        posts: 16,
        address: 'Thanh Xuan Bac',
        email: "nva@gmail.com",
        phone: "0981234567",
        profile_link: "/profile/001",
    }
]