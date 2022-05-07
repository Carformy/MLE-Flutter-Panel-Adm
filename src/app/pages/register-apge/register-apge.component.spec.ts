import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterApgeComponent } from './register-apge.component';

describe('RegisterApgeComponent', () => {
  let component: RegisterApgeComponent;
  let fixture: ComponentFixture<RegisterApgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterApgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterApgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
