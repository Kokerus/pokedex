import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { types } from '../../../shared/enums/types.enum';

@Component({
    selector: 'pokedex-pokemon-card',
    templateUrl: 'pokemon-card.component.html',
    styleUrl: 'pokemon-card.component.scss'
})

export class PokemonCardComponent implements OnInit {

    @Input()
    pokemon!: Pokemon;

    constructor() { }

    ngOnInit() { }

    getBackgroundColor(color: string){
        return types[color];
    }
}