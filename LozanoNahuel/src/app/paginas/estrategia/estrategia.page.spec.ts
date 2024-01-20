import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstrategiaPage } from './estrategia.page';

describe('EstrategiaPage', () => {
  let component: EstrategiaPage;
  let fixture: ComponentFixture<EstrategiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstrategiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
