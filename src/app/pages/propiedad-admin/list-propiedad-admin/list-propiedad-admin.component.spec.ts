import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropiedadAdminComponent } from './list-propiedad-admin.component';

describe('ListPropiedadAdminComponent', () => {
  let component: ListPropiedadAdminComponent;
  let fixture: ComponentFixture<ListPropiedadAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropiedadAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropiedadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
