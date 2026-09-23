import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { Catalog } from '../services/catalog';

@Component({
  selector: 'app-catalogcomponent',
  imports: [CommonModule], // 2. Thêm CommonModule vào mảng imports này
  templateUrl: './catalogcomponent.html',
  styleUrls: ['./catalogcomponent.css']
})
export class Catalogcomponent implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: Catalog) { }

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}