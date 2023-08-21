import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient:HttpClient) { 
    this.ListaPokemons();
  }
 async ListaPokemons() {
  const requisicao = await this.httpClient
   this.httpClient.get<any>('https://pokeapi.co/api/v2/berry-firmness/{id ou nome}/').toPromise();
   
   console.log(requisicao);
   
  }

}
