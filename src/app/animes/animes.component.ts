import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAnimes, animes } from '../animes';
import { AnimesService } from '../animes.service';
import { ActivatedRoute } from '@angular/router';
import { ILançamento , lancamento } from '../lancamento';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']  // <-- Corrigido aqui
})
export class AnimesComponent implements OnInit, AfterViewInit {

  animes: IAnimes[] | undefined;
  lancamento: ILançamento[] | undefined;

  @ViewChild('lancamentoList') lancamentoListRef!: ElementRef;

  constructor(
    private animesService: AnimesService,
    private lancamentoService: LancamentoService,
    private route: ActivatedRoute
  ) {
    this.lancamento = this.lancamentoService.lancamento;
  }

  ngOnInit(): void {
    const animes = this.animesService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        console.log(descricao);
        this.animes = animes.filter(anime => anime.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.animes = animes;
    });
  }

  ngAfterViewInit(): void {
    const list = this.lancamentoListRef?.nativeElement;
    const btnRight = document.getElementById('scroll-button');
    const btnLeft = document.getElementById('scroll-button-return');

    if (list && btnRight && btnLeft) {
      btnRight.addEventListener('click', () => {
        list.scrollBy({ left: 300, behavior: 'smooth' });
      });

      btnLeft.addEventListener('click', () => {
        list.scrollBy({ left: -300, behavior: 'smooth' });
      });
    }
  }
}
