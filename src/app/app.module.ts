import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RouterModule, Routes } from '@angular/router';
import { VitoriaComponent } from './vitoria/vitoria.component';

const appRoutes: Routes = [
  {path: '', component: GameComponent, },
  {path: 'derrota', component: ResultadoComponent},
  {path: 'vitoria', component: VitoriaComponent}
 
]

@NgModule({
  
  declarations: [
    AppComponent,
    GameComponent,
    ResultadoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
