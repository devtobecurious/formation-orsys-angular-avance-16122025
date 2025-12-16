export interface ItemState<T extends string | {}> {
    item: T,
    error?: unknown
}

export interface SearchState extends ItemState<string> {
    
}

export const defaultItem: SearchState = {
    item: ''
}