import { TestBed, inject } from '@angular/core/testing';
import { DashboardSidebarItemsService } from './dashboard-sidebar-items.service';

describe('DashboardSidebarItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardSidebarItemsService]
    });
  });

  it('should ...', inject([DashboardSidebarItemsService], (service: DashboardSidebarItemsService) => {
    expect(service).toBeTruthy();
  }));
});
