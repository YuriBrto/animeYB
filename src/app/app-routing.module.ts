import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { DetalhesAnimeComponent } from './animes/detalhes-anime/detalhes-anime.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VipComponent } from './vip/vip.component';

const routes: Routes = [
  {path:'vip',component:VipComponent},
{path:'perfil',component:PerfilComponent},
  {path:'animes', loadChildren:() => import ('./animes/animes.module').then(m => m.ProdutosModule)},

  {path:"", redirectTo:"animes", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
