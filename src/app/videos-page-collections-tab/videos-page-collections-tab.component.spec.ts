import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPageCollectionsTabComponent } from './videos-page-collections-tab.component';

describe('VideosPageCollectionsTabComponent', () => {
  let component: VideosPageCollectionsTabComponent;
  let fixture: ComponentFixture<VideosPageCollectionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPageCollectionsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPageCollectionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
