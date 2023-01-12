import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditrProductoComponent } from './add-editr-producto/add-editr-producto.component';
import { CrudProductoComponent } from './crud-producto/crud-producto.component';
import { ProductoDetalladoComponent } from './producto-detallado/producto-detallado.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    AddEditrProductoComponent,
    CrudProductoComponent,
    ProductoDetalladoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddEditrProductoComponent,
    CrudProductoComponent,
    ProductoDetalladoComponent,
    ProductosComponent
  ]
})
export class TiendaModule { }
