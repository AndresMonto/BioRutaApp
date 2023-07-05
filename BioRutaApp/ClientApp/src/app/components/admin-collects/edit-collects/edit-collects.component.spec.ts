import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollectsComponent } from './edit-collects.component';

describe('EditCollectsComponent', () => {
  let component: EditCollectsComponent;
  let fixture: ComponentFixture<EditCollectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCollectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
