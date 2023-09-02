// Frontend Typescript
export type initialStateTS = {
    name?: string;
    email: string;
    password: string;
};

export type eventTypeTS = {
    name: string;
    value: string;
}

// Backend Typescript
export type ReturnAuthTS = {
    statusCode: number;
    flag: boolean;
    message: string;
    desc: {
        dataLength?: number;
        errorMessage?: string | any;
    } | string;
    data?: any[];
}

export type ReturnLoginTS = {
    statusCode: number;
    flag: boolean;
    message: string;
    desc: string;
    accessToken: string;
    refreshToken: string;
}

export type ResponseLogin = {
    message: string;
    desc: string;
    accessToken: string;
    refreshToken: string;
}

export type ResponseSignup = {
    message: string;
    desc: string;
}