import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Thêm dòng này
import { ProductServiceEx13 } from '../services/product-service-ex13';

@Component({
  selector: 'app-service-product-image-event',
  imports: [CommonModule], // Thêm dòng này
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
  public products: any;

  constructor(pservice: ProductServiceEx13, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}