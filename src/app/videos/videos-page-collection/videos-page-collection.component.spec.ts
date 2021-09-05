import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPageCollectionComponent } from './videos-page-collection.component';

describe('VideosPageCollectionComponent', () => {
  let component: VideosPageCollectionComponent;
  let fixture: ComponentFixture<VideosPageCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPageCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPageCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
