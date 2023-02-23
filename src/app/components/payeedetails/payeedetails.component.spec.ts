import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeedetailsComponent } from './payeedetails.component';

describe('PayeedetailsComponent', () => {
  let component: PayeedetailsComponent;
  let fixture: ComponentFixture<PayeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
