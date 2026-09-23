import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalogcomponent } from './catalogcomponent';

describe('Catalogcomponent', () => {
  let component: Catalogcomponent;
  let fixture: ComponentFixture<Catalogcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Catalogcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalogcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
