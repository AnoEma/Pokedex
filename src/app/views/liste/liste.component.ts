import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  nameFilter = '';
  selectedPkm= null;
  get pokemonListe(){
    return this.pokeapi.pokeList.filter(pokemon =>{
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }


  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }
  
  selectPokemon(pkm){
   this.selectedPkm = pkm;
  }
}