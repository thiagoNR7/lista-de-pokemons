import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  subscribe(arg0: (response: any) => void) {
    throw new Error('Method not implemented.');
  }
  readonly apiURL: string | undefined;

  constructor(private httpClient: HttpClient) {}

  ListaPokemons(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/');
  }

  CarregarDetalhesPorUrl(url: string){
    return this.httpClient.get(url);
  }
}
