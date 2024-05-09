import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanshetComponent } from './planshet.component';

describe('PlanshetComponent', () => {
  let component: PlanshetComponent;
  let fixture: ComponentFixture<PlanshetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanshetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanshetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
