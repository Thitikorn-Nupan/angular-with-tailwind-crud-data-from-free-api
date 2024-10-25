import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsProductsComponent } from './reads-products.component';

describe('ReadsProductsComponent', () => {
  let component: ReadsProductsComponent;
  let fixture: ComponentFixture<ReadsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadsProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
