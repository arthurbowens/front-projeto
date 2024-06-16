import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadeListagemComponent } from './validade-listagem.component';

describe('ValidadeListagemComponent', () => {
  let component: ValidadeListagemComponent;
  let fixture: ComponentFixture<ValidadeListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidadeListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidadeListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
