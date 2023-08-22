import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAppComponent } from './cuerpo-app.component';

describe('CuerpoAppComponent', () => {
  let component: CuerpoAppComponent;
  let fixture: ComponentFixture<CuerpoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
