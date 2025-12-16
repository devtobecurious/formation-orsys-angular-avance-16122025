export interface Selfie {
    id: number;
    url: string;
    title: string;
}

export type Array<T> = T[];
export type Selfies = Array<Selfie>;