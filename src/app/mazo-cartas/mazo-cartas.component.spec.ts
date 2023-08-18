import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazoCartasComponent } from './mazo-cartas.component';

describe('MazoCartasComponent', () => {
  let component: MazoCartasComponent;
  let fixture: ComponentFixture<MazoCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazoCartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazoCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
