import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDetailsComponent } from './cdetails.component';

describe('CDetailsComponent', () => {
  let component: CDetailsComponent;
  let fixture: ComponentFixture<CDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
