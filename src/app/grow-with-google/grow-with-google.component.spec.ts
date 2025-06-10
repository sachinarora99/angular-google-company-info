import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowWithGoogleComponent } from './grow-with-google.component';

describe('GrowWithGoogleComponent', () => {
  let component: GrowWithGoogleComponent;
  let fixture: ComponentFixture<GrowWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowWithGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
