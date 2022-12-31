import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReplaceComponent } from './ngx-replace.component';

describe('NgxReplaceComponent', () => {
  let component: NgxReplaceComponent;
  let fixture: ComponentFixture<NgxReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxReplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
