import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMediaItemComponent } from './home-media-item.component';

describe('HomeMediaItemComponent', () => {
  let component: HomeMediaItemComponent;
  let fixture: ComponentFixture<HomeMediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMediaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
