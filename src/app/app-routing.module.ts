import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'empleado', component: EmpleadosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
