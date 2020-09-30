import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPropiedadAdminComponent } from './detail-propiedad-admin.component';

describe('DetailPropiedadAdminComponent', () => {
  let component: DetailPropiedadAdminComponent;
  let fixture: ComponentFixture<DetailPropiedadAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPropiedadAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPropiedadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
