import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';


const routes: Routes = [
  {path: 'gastos', component: GastosComponent},
  {path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
