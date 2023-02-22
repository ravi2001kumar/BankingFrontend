import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDetailsComponent } from './tdetails.component';

describe('TDetailsComponent', () => {
  let component: TDetailsComponent;
  let fixture: ComponentFixture<TDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
