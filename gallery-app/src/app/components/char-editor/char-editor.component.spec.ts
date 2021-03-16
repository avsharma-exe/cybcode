import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharEditorComponent } from './char-editor.component';

describe('CharEditorComponent', () => {
  let component: CharEditorComponent;
  let fixture: ComponentFixture<CharEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
