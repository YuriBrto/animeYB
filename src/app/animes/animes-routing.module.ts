import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesAnimeComponent } from './detalhes-anime/detalhes-anime.component';
import { AnimesComponent } from './animes.component';


const routes: Routes = [{ path: '', component: AnimesComponent},
{path:":id" , component: DetalhesAnimeComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
