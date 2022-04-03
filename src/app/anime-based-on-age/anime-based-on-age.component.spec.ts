import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeBasedOnAgeComponent } from './anime-based-on-age.component';

describe('AnimeBasedOnAgeComponent', () => {
  let component: AnimeBasedOnAgeComponent;
  let fixture: ComponentFixture<AnimeBasedOnAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeBasedOnAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeBasedOnAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
