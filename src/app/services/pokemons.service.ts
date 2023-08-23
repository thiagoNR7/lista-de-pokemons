import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  

  constructor(private httpClient:HttpClient) {

  }
   ListaPokemons() {
   return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/')
    
  }

}
