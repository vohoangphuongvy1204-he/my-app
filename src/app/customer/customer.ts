import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer implements OnInit {

  customerTypes: any[] = [];

  constructor(
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef // Thêm cái này
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        console.log('Dữ liệu tải lại:', data);
        this.customerTypes = data;
        this.cdr.detectChanges(); // Bắt buộc Angular vẽ lại UI ngay lập tức
      },
      error: (err) => {
        console.error('Lỗi khi tải lại dữ liệu:', err);
      }
    });
  }
}