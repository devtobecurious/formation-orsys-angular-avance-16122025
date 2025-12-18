import { createReducer, on } from "@ngrx/store";
import { initialWookieeListState } from "./wookiee.state";
import { addWookieeAction } from "./wookiees.actions";

export const wookieeListReducer = createReducer(
    initialWookieeListState,
    on(addWookieeAction, (state, action) => {
        const newWookiee = action.item;

        const newState = { ...state, items: [...state.items, newWookiee] };

        return newState;
    })
);