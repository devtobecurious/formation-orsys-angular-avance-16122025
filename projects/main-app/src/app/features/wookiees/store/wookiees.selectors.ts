import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../store";

//1. Choix du sous état
export const selectWookieesState = (state: ApplicationState) => state.wookiees;

//2. Création des sélecteurs
export const selectAllWookiees = createSelector(selectWookieesState, (wookieeState) => wookieeState.items);
export const selectWookieesLoading = createSelector(selectWookieesState, (wookieeState) => wookieeState.loading);
export const selectWookieesError = createSelector(selectWookieesState, (wookieeState) => wookieeState.error);