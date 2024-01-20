import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstrategiaIPage } from './estrategia-i.page';

describe('EstrategiaIPage', () => {
  let component: EstrategiaIPage;
  let fixture: ComponentFixture<EstrategiaIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstrategiaIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
