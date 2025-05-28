import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticasSustentaveisComponent } from './praticas-sustentaveis.component';

describe('PraticasSustentaveisComponent', () => {
  let component: PraticasSustentaveisComponent;
  let fixture: ComponentFixture<PraticasSustentaveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticasSustentaveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticasSustentaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
