export type TTheme = "light" | "dark";

export interface ITheme {
    mode: TTheme
};

export interface IPost {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: {
        likes: number,
        dislikes: number
    },
    views: number,
    userId: number
};

export interface IPData {
    total: number,
    skip: number,
    limit: number,
    posts: IPost[]
};

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: string
        }
    },
    university: string,
    company: {
        department: string,
        name: string,
        title: string
    },
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: string
};

export interface IUData {
    total: number,
    skip: number,
    limit: number,
    users: IUser[]
};

export interface ILog {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    accessToken: string,
    refreshToken: string
};

export interface IAuth {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    image: string
};

export interface IAuthState {
    isAuth: boolean,
    user: IAuth | null
};



