import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneListComponentComponent } from './done-list-component.component';

describe('DoneListComponentComponent', () => {
  let component: DoneListComponentComponent;
  let fixture: ComponentFixture<DoneListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
