import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenamientoIPage } from './entrenamiento-i.page';

describe('EntrenamientoIPage', () => {
  let component: EntrenamientoIPage;
  let fixture: ComponentFixture<EntrenamientoIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntrenamientoIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
