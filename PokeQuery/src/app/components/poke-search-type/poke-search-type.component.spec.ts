import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchTypeComponent } from './poke-search-type.component';

describe('PokeSearchTypeComponent', () => {
  let component: PokeSearchTypeComponent;
  let fixture: ComponentFixture<PokeSearchTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSearchTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
