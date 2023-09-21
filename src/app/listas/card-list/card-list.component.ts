import { Component, Input } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() dadosFilho: any[] = [];
  detalhesPokemons: any[] = [];
  ordenarSimples: any [] = [];
  ordem: any;
  constructor(private pokemonsService: PokemonsService) {}
  ngOnInit(): void {
    this.dadosFilho;
    this.carregarDetalhes();
  }
  carregarDetalhes(): void {
    for (var y = 0; y < this.dadosFilho.length; y++) {
      let urlDados = this.dadosFilho[y].url;
      this.pokemonsService
        .CarregarDetalhesPorUrl(urlDados)
        .subscribe((response: any) => {
          this.detalhesPokemons.push(response);
          console.log(response);
        })
    }
    

  }
   

  


  }
  
  
