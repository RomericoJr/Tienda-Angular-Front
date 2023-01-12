import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditrProductoComponent } from './add-editr-producto.component';

describe('AddEditrProductoComponent', () => {
  let component: AddEditrProductoComponent;
  let fixture: ComponentFixture<AddEditrProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditrProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditrProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
