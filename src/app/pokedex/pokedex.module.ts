import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [ListComponent],
    declarations: [ListComponent],
    providers: [],
})
export class PokedexModule { }
