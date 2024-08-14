import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';

import { DetalhesAnimeComponent } from './detalhes-anime/detalhes-anime.component';
import { FormsModule } from '@angular/forms';
import { AnimesComponent } from './animes.component';


@NgModule({
  declarations: [
    AnimesComponent,
    DetalhesAnimeComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
