import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeSearchTypeService {

  constructor(private http:HttpClient) { }

  getPokemonFromApi(type:string):Observable<Pokemon>{

    let obj: any;

    obj = this.http.get("https://pokeapi.co/api/v2/type/"+type+"/") as Observable<Pokemon>;


    return obj; // returns an array of all the pokemon of said type
  }
}
