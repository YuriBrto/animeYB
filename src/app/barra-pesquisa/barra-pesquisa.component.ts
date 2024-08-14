import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent {
  descricao = "";
  constructor( 
    private router : Router){
  
  }
    pesquisar(){
   if(this.descricao){
    this.router.navigate(["animes"],{queryParams: {descricao : this.descricao}})
    return;
   }
   this.router.navigate(["animes"]);
    }
}
