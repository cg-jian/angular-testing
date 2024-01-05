import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductComponent } from '../product/product.component';
import { EventProductComponent } from '../event-product/event-product.component';
import { PhysicalProductComponent } from '../physical-product/physical-product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AppComponent,
    ProductComponent,
    EventProductComponent,
    PhysicalProductComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
