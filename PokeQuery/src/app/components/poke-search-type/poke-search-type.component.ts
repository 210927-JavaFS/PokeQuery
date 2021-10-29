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
  public input:string = '';
  public pokemonType:any =  [];
  public pokemonList:Pokemon[] = [];



  constructor(private pokeService:PokeSearchTypeService) { }

  ngOnInit(): void {
  }

  getPokemon(){
    console.log("in getPokemon");
    this.pokeService.getPokemonFromApi(this.input).subscribe(

      (data: any)=>{
        this.pokemonType=data;

        for (let i = 0; i < this.pokemonType.pokemon.length; i++) {
          const element = this.pokemonType.pokemon[i];
          this.pokeService.getPokemonSprites(element.pokemon.url).subscribe(
            (data:any)=>{
              this.pokemonList[i] = new Pokemon(element.pokemon.name, data);
            }
          )
        }
        console.log(this.pokemonType.pokemon[0].pokemon.name);
      },

      (error)=>{
        this.pokemon=null;
        console.log("Didn't retrieve Pokemon");
        console.log(error);
      }
    )
  }
}
