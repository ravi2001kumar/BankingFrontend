import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBalanceComponent } from './cbalance.component';

describe('CBalanceComponent', () => {
  let component: CBalanceComponent;
  let fixture: ComponentFixture<CBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
