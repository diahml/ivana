import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on login', () => {
    spyOn(router, 'navigate');
    component.home();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to home on register', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });

  it('should go to home on lupapassword', () => {
    spyOn(router, 'navigate');
    component.lupapassword();
    expect(router.navigate).toHaveBeenCalledWith(['lupapassword']);
  });
});
