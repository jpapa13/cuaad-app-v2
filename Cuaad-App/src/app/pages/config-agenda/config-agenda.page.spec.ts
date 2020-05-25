import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAgendaPage } from './config-agenda.page';

describe('ConfigAgendaPage', () => {
  let component: ConfigAgendaPage;
  let fixture: ComponentFixture<ConfigAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
