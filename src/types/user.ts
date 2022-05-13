export enum UserRole { Admin="admin", Renter="renter", LandLord="landlord" }
export enum ThemeColor {
    Red = "linear-gradient(135deg, #FD8D32 0%, #A307BA 100%)",
    Violet = "linear-gradient(135deg, #8147FF 0%, #8FB4FF 100%)",
    Orange = "linear-gradient(135deg, #FDCB5C 0%, #ED4956 100%)"
}
export enum AvatarSize { SSmall = "32px", Small = "50px", Medium = "60px", Large = "80px", XLarge = "120px", X2Large = "180px" }

export interface UserProperty {
    id: string,
    username: string,
    name: string,
    avtHref: string,
    theme: ThemeColor,
    distance: number,
    address: string,
    role: UserRole,
    email: string,
    phone: string,
    profile_link: string,
}

export const UserExample: UserProperty = {
    id: '001',
    username: '@john',
    name: 'John',
    avtHref: 'https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg',
    theme: ThemeColor.Red,
    distance: 1.2,
    address: 'Thanh Xuan Bac',
    role: UserRole.Renter,
    email: "nva@gmail.com",
    phone: "0981234567",
    profile_link: "/profile/001",
}