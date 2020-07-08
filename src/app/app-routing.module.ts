import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'Cliente', component: ClientComponent },
  { path: '**', component: ClientComponent },

  { path: 'Ventas', component: SaleComponent },
  { path: 'Productos', component: ProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
