import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkspaceComponent } from './page-workspace.component';

describe('PageWorkspaceComponent', () => {
  let component: PageWorkspaceComponent;
  let fixture: ComponentFixture<PageWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWorkspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
