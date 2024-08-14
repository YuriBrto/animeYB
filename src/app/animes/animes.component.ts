import { Component } from '@angular/core';
import { IAnimes, animes } from '../animes';
import { AnimesService } from '../animes.service';
import { ActivatedRoute } from '@angular/router';
import { ILançamento , lancamento} from '../lancamento';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrl: './animes.component.css'
})
export class AnimesComponent {

  animes : IAnimes[] | undefined;
  lancamento : ILançamento[] | undefined;
  constructor(  private animesService: AnimesService,
    private lancamentoService : LancamentoService,
   private route : ActivatedRoute
 
  ){
    this.lancamento = this.lancamentoService.lancamento;
  }

  ngOnInit(): void {
  
  
 
   const animes = this.animesService.getAll();
   this.route.queryParamMap.subscribe(params => {
     const descricao = params.get("descricao")?.toLowerCase()
    
 
     if (descricao){
       console.log(descricao)
 this.animes = animes.filter(animes => animes.descricao.toLowerCase().includes(descricao))
 
 return;
 }
 this.animes = animes;
   })
  
   
  }
}
