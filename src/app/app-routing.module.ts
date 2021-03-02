import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiclosDetalleComponent } from './components/ciclos-detalle/ciclos-detalle.component';


const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"ciclos", component:CiclosComponent},
{path:"asignaturas", component:AsignaturasComponent},
{path:"verDetalle",component:CiclosDetalleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }