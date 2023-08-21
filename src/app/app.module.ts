import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CardListComponent } from './listas/card-list/card-list.component';
import { PokemonsService } from './services/pokemons.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
