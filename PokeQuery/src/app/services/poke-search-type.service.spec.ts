import { TestBed } from '@angular/core/testing';

import { PokeSearchTypeService } from './poke-search-type.service';

describe('PokeSearchTypeService', () => {
  let service: PokeSearchTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeSearchTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
