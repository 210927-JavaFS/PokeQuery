import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { PokeService } from 'src/app/services/poke-search-type.service';

// @Component({
//   selector: 'app-poke-search-type',
//   templateUrl: './poke-search-type.component.html',
//   styleUrls: ['./poke-search-type.component.css']
// })


@Injectable({
  providedIn: 'root'
})
export class PokeSearchTypeService {

  constructor(private http:HttpClient) { }

  getPokemonFromApi(type:string):Observable<Pokemon>{

    let obj: any;
    obj = this.http.get("https://pokeapi.co/api/v2/type/"+type+"/") as Observable<Pokemon>;
    return obj; 
  }

  getPokemonSprites(url:string):Observable<Pokemon>{
    
    let obj: any;
    obj = this.http.get(url) as Observable<Pokemon>;
    return obj; 
  }

}
