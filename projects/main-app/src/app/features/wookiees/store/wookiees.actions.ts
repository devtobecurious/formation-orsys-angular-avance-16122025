import { createAction, props } from "@ngrx/store";
import { Wookiee } from "../models/wookiee";

export type AddWookieePayload = {
    item: Wookiee;
}

export const addWookieeAction = createAction('[UI] - Add Wookiee', props<AddWookieePayload>());