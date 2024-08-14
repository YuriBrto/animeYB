import { Component, OnInit } from '@angular/core';
import { IAnimes } from '../../animes';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../../animes.service';
import { ILançamento } from '../../lancamento';
import { LancamentoService } from '../../lancamento.service';
@Component({
  selector: 'app-detalhes-anime',
  templateUrl: './detalhes-anime.component.html',
  styleUrl: './detalhes-anime.component.css'
})
export class DetalhesAnimeComponent implements OnInit {
  animes:IAnimes | undefined;
  lancamento: ILançamento | undefined;
  quantidade = 1;
constructor(private animesService : AnimesService,

  private route: ActivatedRoute,
 
){}

ngOnInit(): void{
const routeParams = this.route.snapshot.paramMap;
const animesId = Number(routeParams.get("id"));
const lancamentoId = Number(routeParams.get(":id"));
this.animes = this.animesService.getOne(animesId);
}
}
