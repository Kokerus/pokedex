import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokedexResponse } from '../models/pokedex-response.model';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({providedIn: 'root'})
export class PokedexService {
    constructor(private http: HttpClient) { }
    
    private API_URL = 'https://pokeapi.co/api/v2';

    public getPokemonList(): Observable<PokedexResponse> {
        return this.http.get<PokedexResponse>(`${this.API_URL}/pokemon/?limit=151`);
    }

    public getPokemonById(id: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.API_URL}/pokemon/${id}`);
    }

    public getPokemonByUrl(url: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(url);
    }

}