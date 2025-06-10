import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeDoComponent } from './why-we-do.component';

describe('WhyWeDoComponent', () => {
  let component: WhyWeDoComponent;
  let fixture: ComponentFixture<WhyWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWeDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
