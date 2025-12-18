import { required, schema } from "@angular/forms/signals";

export interface Planet {
    id: number;
    name: string;
    climate: string;
    terrain: string;
}

export const planetSchema = schema<Planet>(context => {
    required(context.name);
    required(context.climate);
    required(context.terrain);
});

