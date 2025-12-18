import { createReducer } from "@ngrx/store";
import { WookieeList } from "../models/wookiee";

export interface WookieeListState {
    items: WookieeList;
    loading?: boolean;
    error?: string | null;
}

export const initialWookieeListState: WookieeListState = {
    items: []
};

