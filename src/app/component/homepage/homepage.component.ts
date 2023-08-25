import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Subscriber, subscribeOn } from 'rxjs';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
pokemons = ['pikachu, charmander, raiochu, venosaur'];
  pokemon: any;

constructor(private pokemonsService: PokemonsService){}
ngOnInit(): void{
this.pokemonsService.ListaPokemons().subscribe()
}
}
