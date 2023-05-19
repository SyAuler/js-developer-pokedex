import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: PokemonComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class PokemonRoutingModule { }
