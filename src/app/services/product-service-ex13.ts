import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceEx13 {
  productsImage = [
    { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "assets/coca.jfif" },
    { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/pepsi.jfif" },
    { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/sting.jfif" }
  ];

  constructor() { }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}