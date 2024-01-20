import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraderCallPage } from './trader-call.page';

describe('TraderCallPage', () => {
  let component: TraderCallPage;
  let fixture: ComponentFixture<TraderCallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraderCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
