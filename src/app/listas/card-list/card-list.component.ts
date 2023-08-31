import { Component, Input } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  dadosAPI: any[] = [];

  constructor(private pokemonsService: PokemonsService){}
ngOnInit(): void{
this.dadosAPI

}



}