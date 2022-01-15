import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // Test equal in a var
  it('myVar should be equal to Hola Mundo', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo');
  });
  // Test if a var contains a value
  it('nombre should contain Jhon', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.nombre;
    expect(valor).toContain('Jhon');
  });
  // test Booleans
  it('it should be Par', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.par(44);
    expect(valor).toBeTruthy();
  });
  it('it should be Inpar', () => {
    const appComponent = new AppComponent();
    const valor = appComponent.par(41);
    expect(valor).toBeFalsy();
  });
});
