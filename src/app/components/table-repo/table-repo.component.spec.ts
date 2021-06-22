import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRepoComponent } from './table-repo.component';

describe('TableRepoComponent', () => {
  let component: TableRepoComponent;
  let fixture: ComponentFixture<TableRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
