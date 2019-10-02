import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdInsertComponent } from './prod-insert.component';

describe('ProdInsertComponent', () => {
  let component: ProdInsertComponent;
  let fixture: ComponentFixture<ProdInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
