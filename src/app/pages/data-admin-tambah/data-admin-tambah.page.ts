import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "src/app/api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-data-admin-tambah',
  templateUrl: './data-admin-tambah.page.html',
  styleUrls: ['./data-admin-tambah.page.scss'],
})
export class DataAdminTambahPage implements OnInit {
  username: any;
  email: any;
  nama: any;
  alamat: any;
  telp: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {

  }

  ngOnInit() {
  }

  addAdmin() {
    let url = this._apiService.apiURL() + "/tambah.php";
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
        password: this.password
      },
    })
    console.log('berhasil');
  }
}
