import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';

@Component({
  selector: 'app-thiago',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'helpers-front';
 constructor (private pokemonsService:PokemonsService){
  

  
 }

}
