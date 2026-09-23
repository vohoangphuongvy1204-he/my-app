import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { Catalogcomponent } from './catalogcomponent/catalogcomponent'; // Sửa đúng tên class Catalogcomponent
import { Customer } from './customer/customer';

const routes: Routes = [
  { 
    path: 'service-product-image-event', 
    component: ServiceProductImageEventComponent 
  },
  { 
    path: 'service-product-image-event/:id', 
    component: ServiceProductImageEventDetailComponent 
  },
  { 
    path: 'catalog', 
    component: Catalogcomponent 
  },
  { 
    path: 'customer', 
    component: Customer 
  },
  { 
    path: '', 
    redirectTo: 'customer', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }