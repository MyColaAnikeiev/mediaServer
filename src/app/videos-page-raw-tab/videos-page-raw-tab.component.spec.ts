import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPageRawTabComponent } from './videos-page-raw-tab.component';

describe('VideosPageRawTabComponent', () => {
  let component: VideosPageRawTabComponent;
  let fixture: ComponentFixture<VideosPageRawTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPageRawTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPageRawTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
