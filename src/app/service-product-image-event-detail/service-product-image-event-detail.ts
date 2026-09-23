import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Thêm dòng này
import { ProductServiceEx13 } from '../services/product-service-ex13';

@Component({
  selector: 'app-service-product-image-event-detail',
  imports: [CommonModule], // Thêm dòng này
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductServiceEx13,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}