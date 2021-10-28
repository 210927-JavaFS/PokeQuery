import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeSearchTypeService } from 'src/app/services/poke-search-type.service';

@Component({
  selector: 'app-poke-search-type',
  templateUrl: './poke-search-type.component.html',
  styleUrls: ['./poke-search-type.component.css']
})
export class PokeSearchTypeComponent implements OnInit {

  public pokemon:Pokemon|null = null;
  public input:string = "";
  public pokemonList:Pokemon[] =  [];


  constructor(private pokeService:PokeSearchTypeService) { }

  ngOnInit(): void {
  }

  getPokemon(){
    console.log("in getPokemon");
    this.pokeService.getPokemonFromApi(this.input).subscribe(

      (data: any)=>{
        this.pokemonList=data;
        console.log(this.pokemonList);
      },
      (error)=>{
        this.pokemon=null;
        console.log("Didn't retrieve Pokemon");
        console.log(error);
      }
    )
  }
}
