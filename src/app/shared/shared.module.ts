import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedNavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        SharedNavigationComponent
    ],
    declarations: [SharedNavigationComponent],
    providers: [],
})
export class SharedModule { }
