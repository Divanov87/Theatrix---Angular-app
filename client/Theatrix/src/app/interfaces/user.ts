export interface IUser {
    _id: string;
    username: string;
    password: string;
    email: string;
    city: string;
    role: string;
    created: string[];
    liked: string[];
    bought: string[];
    pinned: string[];
    registrationIp: string;
    lastLoginIp: null | string;
    registrationDate: Date;
    lastLoginDate: Date;
    __v: number;
}
