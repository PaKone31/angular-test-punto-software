import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemZoneComponent } from './item-zone.component';

describe('ItemZoneComponent', () => {
  let component: ItemZoneComponent;
  let fixture: ComponentFixture<ItemZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
