import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  get(): import("../component/homepage/homepage.component").HomepageComponent {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) {

  }
   ListaPokemons() {
   return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/')
    
  }

}
