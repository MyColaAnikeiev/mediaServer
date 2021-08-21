import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPageContentComponent } from './videos-page-content.component';

describe('VideosPageContentComponent', () => {
  let component: VideosPageContentComponent;
  let fixture: ComponentFixture<VideosPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
