import { ListaSetorComponent } from './lista-setor.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ListaSetorComponent', () => {
  let component: ListaSetorComponent;
  let fixture: ComponentFixture<ListaSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
