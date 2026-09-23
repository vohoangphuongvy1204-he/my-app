import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceProductImageEventComponent } from './service-product-image-event';
import { ProductServiceEx13 } from '../services/product-service-ex13';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ServiceProductImageEventComponent', () => {
  let component: ServiceProductImageEventComponent;
  let fixture: ComponentFixture<ServiceProductImageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProductImageEventComponent], // Dùng imports nếu component là Standalone
      providers: [
        ProductServiceEx13,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});