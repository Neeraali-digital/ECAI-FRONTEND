import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCommittee } from './state-committee';

describe('StateCommittee', () => {
  let component: StateCommittee;
  let fixture: ComponentFixture<StateCommittee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateCommittee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCommittee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
