import { Injectable } from '@angular/core';
import { IAnimes, animes } from './animes';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
animes : IAnimes[] = animes;

  constructor() { }
  getAll(){
    return this.animes;
   
  }
  getOne(animesId: number){
    return this.animes.find(animes=> animes.id === animesId);
   
  }

}
