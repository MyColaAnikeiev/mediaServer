import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicContentListComponent } from './music-content-list.component';

describe('MusicContentListComponent', () => {
  let component: MusicContentListComponent;
  let fixture: ComponentFixture<MusicContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
