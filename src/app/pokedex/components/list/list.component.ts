import { Component } from '@angular/core';
import { PokedexService } from '../../service/pokedex.service';
import { Result } from '../../models/results.model';
import { Pokemon } from '../../models/pokemon.model';
import { types } from '../../../shared/enums/types.enum';

@Component({
    selector: 'pokedex-list',
    templateUrl: 'list.component.html',
    styleUrl: 'list.component.scss'
})

export class ListComponent {

    pokemonList: Result[] = [];
    pokemons: Pokemon[] = [];

    constructor(private pokedexService: PokedexService) {
        this.getPokemons();
    }

    getPokemonList(): void {
        this.pokedexService.getPokemonList().subscribe(
            result => {
                this.pokemonList = result.results;
            }
        )
    }

    getPokemons() {
        for (let index = 1; index <= 151; index++) {
            this.pokedexService.getPokemonById(index).subscribe(
                pokemon => this.pokemons.push(pokemon)
            )
        }
    }

    getBackgroundColor(color: string){
        return types[color];
    }
}
