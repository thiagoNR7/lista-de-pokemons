import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
 readonly apiURL:  string | undefined


  constructor(private httpClient:HttpClient) { 
 this.apiURL == 'https://pokeapi.co/api/v2/pokemon/';
  }
 
  ListaPokemons(): Observable <any>{
return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/')
  }


}
