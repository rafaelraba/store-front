import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { AppComponent } from './app.component';
import { VentasComponent } from './components/ventas/ventas.component';


const routes: Routes = [
  { path: 'empleado', component: EmpleadosComponent },
  { path: 'productos', component: VentasComponent },
  { path: '**', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
