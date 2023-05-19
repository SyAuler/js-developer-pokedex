import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    pokemonList: any = document.getElementById('pokemonList');
    mostrarCollapse: any = [];
    selectedItem!: { semana: number | null };
    listLoading: boolean = false;

    pageSize = 50;
    pageIndex = 0;
    pageLength: any;

    constructor(
        private pokemonService: PokemonService,
    ) { }

    ngOnInit() {
        this.getPokemon();
    }

    getPokemon() {
         const params = {
            offset: this.pageIndex * this.pageSize,
            limit: this.pageSize,
        };
        this.listLoading = true;
        this.pokemonService.getPokemonWithDetail(params).subscribe( res => {
            this.pokemonList = res;
            this.listLoading = false;
        })
    }

    abrirCollapse(semana: number) {
        const selectedItem = { semana };
        if (this.selectedItem?.semana === semana) {
            this.mostrarCollapse[semana] = !this.mostrarCollapse[semana];
        } else {
            this.mostrarCollapse.fill(false);
            this.mostrarCollapse[semana] = true;
            this.selectedItem = selectedItem;
        }
    }

}
