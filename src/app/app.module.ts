import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokeApiService } from './pokemon/poke-api.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PokemonComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        PokemonModule,
    ],
    providers: [
        PokeApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
