/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoxDialogExcludeListUsersComponent } from './box-dialog-exclude-list-users.component';

describe('BoxDialogExcludeListUsersComponent', () => {
  let component: BoxDialogExcludeListUsersComponent;
  let fixture: ComponentFixture<BoxDialogExcludeListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDialogExcludeListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDialogExcludeListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
