import { TestBed } from '@angular/core/testing';

import { InventoryDBService } from './inventory-db.service';

describe('InventoryDBService', () => {
  let service: InventoryDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
