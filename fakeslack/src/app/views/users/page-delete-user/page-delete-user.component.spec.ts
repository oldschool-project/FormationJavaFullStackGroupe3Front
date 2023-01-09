import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteUserComponent } from './page-delete-user.component';

describe('PageDeleteUserComponent', () => {
  let component: PageDeleteUserComponent;
  let fixture: ComponentFixture<PageDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
