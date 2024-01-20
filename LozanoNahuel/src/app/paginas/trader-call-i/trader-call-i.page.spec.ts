import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraderCallIPage } from './trader-call-i.page';

describe('TraderCallIPage', () => {
  let component: TraderCallIPage;
  let fixture: ComponentFixture<TraderCallIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraderCallIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
