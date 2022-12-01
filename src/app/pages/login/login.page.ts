// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {
//   constructor(private router: Router) { }

//   ngOnInit() { }

//   home() {
//     this.router.navigate(['home']);
//   }



//   lupapassword() {
//     this.router.navigate(['lupapassword']);
//   }



// }
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  prosesLogin(): void {
    if (this.username != null && this.password != null) {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php')
        .subscribe({
          next: (hasil) => {
            if (hasil.status_login == 'berhasil') {
              this.authService.saveData('token', hasil.token);
              this.authService.saveData('username', hasil.username);
              this.username = null;
              this.password = null;
              if (hasil.red == 'admin') {
                this.router.navigateByUrl('/admin');
              } else {
                this.router.navigateByUrl('/home');
              }

            } else {
              this.authService.notifikasi('Username dan Password Salah');
            }
          },
          error: (e) => {
            this.authService.notifikasi('Gagal Login, periksa koneksi internet');
          }
        });
    } else {
      this.authService.notifikasi('Username dan Password Tidak Boleh Kosong');
    }
  }
}
