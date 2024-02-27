import { Result } from "./results.model";

export interface PokedexResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}