/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeeWordComponent } from './see-word.component';

describe('SeeWordComponent', () => {
  let component: SeeWordComponent;
  let fixture: ComponentFixture<SeeWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
