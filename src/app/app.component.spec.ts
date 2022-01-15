import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeAll(() => {
    console.log('beforeAll execute');
  });

  afterAll(() => {
    console.log('afterAll execute');
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
    console.log('beforeEach execute');
    appComponent = new AppComponent();
  });

  afterEach(() => {
    console.log('afterEach execute');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // Test equal in a var
  it('myVar should be equal to Hola Mundo', () => {
    const valor = appComponent.myVar;
    expect(valor).toEqual('Hola Mundo');
  });
  // Test if a var contains a value
  it('nombre should contain Jhon', () => {
    const valor = appComponent.nombre;
    expect(valor).toContain('Jhon');
  });
  // test Booleans
  it('it should be Par', () => {
    const valor = appComponent.par(44);
    expect(valor).toBeTruthy();
  });
  it('it should be Inpar', () => {
    const valor = appComponent.par(41);
    expect(valor).toBeFalsy();
  });
});
