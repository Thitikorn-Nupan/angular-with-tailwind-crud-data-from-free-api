import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsAndTablesComponent } from './lists-and-tables.component';

describe('ListsAndTablesComponent', () => {
  let component: ListsAndTablesComponent;
  let fixture: ComponentFixture<ListsAndTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsAndTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsAndTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
