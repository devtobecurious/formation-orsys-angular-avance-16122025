import { applyEach, min, required, schema, validate } from "@angular/forms/signals";
import { Planet, planetSchema } from "./planet";

export interface Wookiee {
    id: number;
    name: string;
    age: number;
    planet: Planet;
    visitedPlanets: Planet[];
}

export const wookieeSchema = schema<Wookiee>(context => {
    required(context.name);
    min(context.age, 13);
    required(context.planet.name);
    applyEach(context.visitedPlanets, planetSchema);
    validate(context, subContext => {
        
    })
});

export type WookieeList = Wookiee[];