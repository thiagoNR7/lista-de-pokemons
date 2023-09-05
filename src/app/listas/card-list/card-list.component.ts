import { Component, Input } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() dadosFilho: any[] = [];
 detalhesPokemons: any[] = [];
  constructor(private pokemonsService: PokemonsService) {}
  ngOnInit(): void {
    this.dadosFilho;
    this.carregarDetalhes()
  }
  carregarDetalhes(){
    for (var y = 0; y <this.dadosFilho.length; y++){
      console.log(this.dadosFilho[y].name)
    }
  }
}
