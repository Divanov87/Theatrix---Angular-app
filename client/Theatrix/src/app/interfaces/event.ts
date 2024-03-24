export interface IEvent {
    _id: string;
    name: string;
    imageUrl: string;
    tickets: number;
    genre: string;
    restriction: number;
    duration: number;
    rating: number;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    likesList: string[];
    buysList: string[];
    pinsList: string[];
    owner: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}  