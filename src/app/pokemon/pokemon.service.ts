import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { PokeApiService } from './poke-api.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    pokeApi = {}

    constructor(
        private pokeApiService: PokeApiService,
    ) { }

    getPokemonWithDetail(params?: any): Observable<any> {
        return this.pokeApiService.get('pokemon', null, params).pipe(
            switchMap((res: any) => {
                const pokemonRequests = res.results.map((el: any, index: number) => {
                    const pokemonUrl = `pokemon/${el.name}`;
                    return this.pokeApiService.get(pokemonUrl)
                });
                return forkJoin(pokemonRequests);
            })
        );
    }

}
