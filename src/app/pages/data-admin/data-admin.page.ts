import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-admin',
  templateUrl: './data-admin.page.html',
  styleUrls: ['./data-admin.page.scss'],
})
export class DataAdminPage {
  email: any;
  nama: any;
  telp: any;
  alamat: any;
  username: any;
  token: any;
  dataadmin: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.getDataAdmin();
  }

  ngOnInit() {
    console.log('cek fungsi hal event init jalan');
    // this.loadToken();
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getDataAdmin();
  }

  getDataAdmin() {
    this._apiService.getDataAdmin().subscribe((res: any) => {
      console.log("sukses", res);
      this.dataadmin = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data admin',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  deleteDataAdmin(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteDataAdmin(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getDataAdmin();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

  //ceksesi untuk mengambil nama user
  // loadToken() {
  //   this.token = this.authService.getData('token');
  //   if (this.token != null) {
  //     this.nama = this.authService.getData('username');
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }
  // //membuat fungsi logout
  // logout() {
  //   this.authService.logout(); // lempar ke authService lalu cari fungsi logout
  //   this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  // }

}
