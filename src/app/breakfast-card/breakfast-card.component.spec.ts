import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastCardComponent } from './breakfast-card.component';

describe('BreakfastCardComponent', () => {
  let component: BreakfastCardComponent;
  let fixture: ComponentFixture<BreakfastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakfastCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakfastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
