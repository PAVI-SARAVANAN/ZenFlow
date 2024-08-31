import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsanasComponent } from './new-asanas.component';

describe('NewAsanasComponent', () => {
  let component: NewAsanasComponent;
  let fixture: ComponentFixture<NewAsanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAsanasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAsanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
