import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: any;
  nama: any;
  username: any;
  alamat: any;
  telp: any;
  level: any;
  password: any;

  constructor(
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['login']);
  }

  addUser() {
    let url = this._apiService.apiURL() + "/registrasi.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        username: this.username,
        email: this.email,
        nama: this.nama,
        telp: this.telp,
        alamat: this.alamat,
        password: this.password,
        level: this.level
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Registrasi',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/login');
    })
  }
}
