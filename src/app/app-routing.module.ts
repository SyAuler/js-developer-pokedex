import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
    {
        path: '',
        component: PokemonComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokemon',
                pathMatch: 'full',
            },
            {
                path: 'pokemon',
                loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
