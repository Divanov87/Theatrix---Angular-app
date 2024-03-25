import { IUser } from "./user";

export interface IEvent {
    _id: string;
    name: string;
    imageUrl: string;
    tickets: number;
    genre: string;
    restriction: number;
    duration: number;
    rating: number;
    date: Date;
    time: string;
    location: string;
    category: string;
    description: string;
    likesList: string[];
    buysList: string[];
    pinsList: string[];
    owner: IUser[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}  