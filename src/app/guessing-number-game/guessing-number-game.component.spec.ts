import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingNumberGameComponent } from './guessing-number-game.component';

describe('GuessingNumberGameComponent', () => {
  let component: GuessingNumberGameComponent;
  let fixture: ComponentFixture<GuessingNumberGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessingNumberGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessingNumberGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
