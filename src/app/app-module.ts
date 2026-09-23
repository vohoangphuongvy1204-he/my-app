import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Catalogcomponent } from './catalogcomponent/catalogcomponent';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';

import { Customer } from './customer/customer';

@NgModule({
  declarations: [
    App // Chỉ giữ lại App ở đây
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    // Đưa tất cả Standalone Components vào mảng imports này:
    Catalogcomponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    Customer // <-- Chuyển Customer sang mảng imports
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule {}