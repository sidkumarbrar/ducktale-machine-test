import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToDoComponentComponent } from './create-to-do-component.component';

describe('CreateToDoComponentComponent', () => {
  let component: CreateToDoComponentComponent;
  let fixture: ComponentFixture<CreateToDoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateToDoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToDoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
