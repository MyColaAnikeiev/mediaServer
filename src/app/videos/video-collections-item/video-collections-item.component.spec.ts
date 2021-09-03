import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCollectionsItemComponent } from './video-collections-item.component';

describe('VideoCollectionsItemComponent', () => {
  let component: VideoCollectionsItemComponent;
  let fixture: ComponentFixture<VideoCollectionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCollectionsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCollectionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
