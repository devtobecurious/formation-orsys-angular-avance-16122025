import { ActionReducerMap } from "@ngrx/store";
import {  WookieeListState } from "../features/wookiees/store/wookiee.state";
import { wookieeListReducer } from "../features/wookiees/store";

export interface ApplicationState {
    wookiees: WookieeListState
}

export const reducers: ActionReducerMap<ApplicationState> = {
    wookiees: wookieeListReducer
};