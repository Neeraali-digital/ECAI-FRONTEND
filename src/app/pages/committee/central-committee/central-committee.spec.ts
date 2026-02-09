import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCommittee } from './central-committee';

describe('CentralCommittee', () => {
  let component: CentralCommittee;
  let fixture: ComponentFixture<CentralCommittee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralCommittee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralCommittee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
