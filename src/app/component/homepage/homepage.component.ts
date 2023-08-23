import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
pokemons = ['pikachu, charmander, raiochu, venosaur'];
  get: any;

constructor(private httpClient: HttpClient){}
ngOnInit(){
 
}


}
