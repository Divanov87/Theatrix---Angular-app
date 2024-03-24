// export interface IUser{
//     username: string;
//     password:string;
// }

export interface IUser {
    _id: string;
    username: string;
    password: string;
    email: string;
    city: string;
    role: string;
    created: number;
    liked: number;
    bought: string;
    pinned: string;
    registrationIp: string;
    lastLoginIp: string;
    registrationDate: string;
    lastLoginDate: string[];
    __v: number;
}
