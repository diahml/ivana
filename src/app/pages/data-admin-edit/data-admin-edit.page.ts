import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from 'src/app/api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-data-admin-edit',
  templateUrl: './data-admin-edit.page.html',
  styleUrls: ['/data-admin-edit.page.scss'],
})
export class DataAdminEditPage implements OnInit {
  email: any;
  nama: any;
  telp: any;
  alamat: any;
  username: any;
  dataadmin: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.username = param.username;
      console.log(this.username);
      this.ambilDataAdmin(this.username);
    })
  }

  ngOnInit() {
  }

  ambilDataAdmin(username) {
    this._apiService.ambilDataAdmin(username).subscribe((res: any) => {
      console.log('sukses', res);
      let dataadmin = res;
      console.log(dataadmin);
      this.email = dataadmin.email;
      this.nama = dataadmin.nama;
      this.telp = dataadmin.telp;
      this.alamat = dataadmin.alamat;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  editDataAdmin() {
    let url = this._apiService.apiURL() + "/edit.php";
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
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Admin',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/data-admin');
    })
  }

}
