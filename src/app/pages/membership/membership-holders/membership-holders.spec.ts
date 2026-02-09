import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipHolders } from './membership-holders';

describe('MembershipHolders', () => {
  let component: MembershipHolders;
  let fixture: ComponentFixture<MembershipHolders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipHolders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipHolders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
