import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnimesComponent } from './animes/animes.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { AnimesRoutingModule } from './animes/animes-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { VipComponent } from './vip/vip.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    BarraPesquisaComponent,
        PerfilComponent,
        VipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimesRoutingModule,
    CommonModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
