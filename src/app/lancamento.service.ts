import { Injectable } from '@angular/core';
import { ILançamento, lancamento } from './lancamento';
@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  lancamento : ILançamento[] = lancamento;
  constructor() { }
  getAll(){
    return this.lancamento;
   
  }
  getOne( lancamentoId: number){
   
    return this.lancamento.find(lancamento=> lancamento.id ===lancamentoId);
  }

}
