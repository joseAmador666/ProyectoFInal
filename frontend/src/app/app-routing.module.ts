import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { LandingComponent } from './landing/landing.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {path:'productos/detalles' , component: ProductosComponent}
  ,{path:'' , component: LandingComponent,
  pathMatch: 'full'},
  {path:'eleccion' , component: EleccionComponent},
  {path:'productos/detalle' , component: DetalleProductoComponent},
  {path:'ubicacion' , component: UbicacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
