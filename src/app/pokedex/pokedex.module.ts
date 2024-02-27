import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
    imports: [SharedModule],
    exports: [
        ListComponent,
        PokemonCardComponent
    ],
    declarations: [
        ListComponent,
        PokemonCardComponent],
    providers: [],
})
export class PokedexModule { }
